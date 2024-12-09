const { default: mongoose } = require('mongoose')
const {v4: uuid} = require('uuid')

const User = require('../models/users')

const Session = require('../models/session')
const getImageUrl = require('../utils/getImageUrl')

//get all users
async function getAllUsers(req, res, next){
    try{
        const users = await User.find()
        return res.status(200).json(users)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//log user in
async function userLogin(req,res,next){
    try{
              
        const user = await User.findOne(req.body)
        
        if(!user){
            return res.status(401).json({error: 'cannot find user'})
        }

        const session_token = uuid()

        const now = new Date()
        const expireTime = 1200
        const expiresAt = new Date(+now + expireTime * 1000)

        const session = await Session.create({username: user.username, expiresAt, token: session_token})
        
        res.cookie("session_token", session_token, {expires: expiresAt})
        return res.status(200).json({user: user.username, avatar: user.avatar, expireTime})

    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//user log out
async function userLogout(req, res, next){
    try{
        if(!req.cookies){
            return res.status(401).json({error: 'user not logged in'})
        }
 
        const sessionToken = req.cookies['session_token']
        if(!sessionToken){
            res.status(401).json({error: 'user not logged in'})
        }

        await Session.deleteOne({token: sessionToken})

        res.cookie('session_token', '', {expires: new Date()})
        return res.status(200).json({user: '', expireTime: new Date()})
    
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//new user sign up
async function userSignup(req,res,next){
   try{
        const avatar = getImageUrl(req, 'user')
        const user = await User.create({...req.body, avatar})
        return res.status(201).json(user)
   }catch(err){
        return res.status(400).json({error: err.message})
   }
} 

//delete a user
async function deleteUser(req,res,next){
   try{
        const id = req.params.id

        const isIdValid = mongoose.Types.ObjectId.isValid(id);
        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const user = await User.findByIdAndDelete(id)
        
        if(!user) return res.status(404).json({error: 'cannot find user'})
       
        return res.status(200).json(user)
   }catch(err){
        return res.status(400).json({error: err.message})
   }
}

//edit a user
async function editUser(req,res,next){
    try{
        const id = req.params.id

        const isIdValid = mongoose.Types.ObjectId.isValid(id)
        if(!isIdValid) return res.status(400).json({error: 'invalid id'})
        
        const user = await User.findByIdAndUpdate(id, {...req.body})
        if(!user){
            return res.status(404).jso({error: 'no user found'})
        }
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {getAllUsers, userLogin, userLogout, userSignup, deleteUser, editUser}