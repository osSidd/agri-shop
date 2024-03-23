const { default: mongoose } = require('mongoose')
const User = require('../models/user/user')

//create new user
const createUser = async (req, res) => {
    try{        
        const user = await User.create(req.body)
        return res.status(201).json(user)
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
    editUser,
    deleteUser,
}