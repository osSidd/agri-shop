const { default: mongoose } = require('mongoose')
const User = require('../models/user/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register user
const createUser = async (req, res) => {
    try{        
        let {name, password, email} = req.body
        password = await bcrypt.hash(req.body.password, 10)

        const user = await User.create({name, email, password})
        return res.status(201).json({user})
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//user login
const loginUser = async (req, res, next) => {
    try{
        let {email, password} = req.body
        
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({error: 'user not found'})

        const match =  bcrypt.compare(password, user.password)
        if(!match) return res.status(404).json({error: 'password doesnot matches'})

        const token = jwt.sign(user.email, process.env.jwt_secret, {expiresIn: '1h'})

        return res.status(200).json({token})
    
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//edit a user
const editUser = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'invalid user id'})

        const user = await User.findByIdAndUpdate(id, {...req.body})
        if(!user) return res.status(404).json({error: 'User not found'})

        return res.status(200).json(user)

    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete a user
const deleteUser = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'invalid user id'})

        const user = await User.findByIdAndDelete(id)
        if(!user) return res.status(404).json({error: 'User not found'})

        return res.status(200).json(user)

    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    createUser,
    loginUser,
    editUser,
    deleteUser,
}