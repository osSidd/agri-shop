const mongoose = require('mongoose')
const User = require('../../models/user/user')

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

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
}