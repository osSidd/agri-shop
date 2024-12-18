const mongoose = require('mongoose')
const User = require('../../models/user')
const {userObj} = require('../../middleware/authentication')

//create new user
const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get a specific user
const getUser = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Invalid id'})
        
        const user = await User.findById(id)
        if(!user) return res.status(404).json({error: 'user not found'})
        
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//update an existing user
const updateUser = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Invalid id'})
        
        const user = await User.findByIdAndUpdate(id, {...req.body})
        if(!user) return res.status(404).json({error: 'user not found'})
        
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete a user
const deleteUser = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: 'Invalid id'})
        
        const user = await User.findByIdAndDelete(id)
        if(!user) return res.status(404).json({error: 'user not found'})
        
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get all farmers
const getFarmers = async (req, res) => {
    try{
        const farmers = await User.find({type: 'farmer'})        
        return res.status(200).json(farmers)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//user login
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        
        if(!user) return res.status(404).json({error: 'User not found'})
        
        if(password !== user.password) return res.status(400).json({error: "Password doesn't match"})
        
        userObj.name = user.name
        userObj.username = user.type === 'farmer' ? '' : user.username
        userObj.type = user.type

        return res.status(200).json({status: 'ok'})
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//user logout
const logoutUser = async (req, res) => {
    try{
        if(!userObj.name) return res.status(400).json({error: 'user not logged in'})
        
        userObj.name = ''
        userObj.username = ''
        userObj.type = 'user'

        return res.status(200).json({status: 'ok', message: 'logged out'})
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getFarmers,
    loginUser,
    logoutUser,
}