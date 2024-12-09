const { default: mongoose } = require('mongoose')
const Subscriber = require('../models/subscribers')

//get all subscribers
const getAllSubscribers = async (req, res, next) => {
    try{
        const subscribers = await Subscriber.find()
        return res.status(200).json(subscribers)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//add new subscriber
const addSubscriber = async (req, res, next) => {
    try{
        const subscriber = await Subscriber.create(req.body)
        return res.status(200).json(subscriber)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete a subscriber
const deleteSubscriber = async (req, res, next) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).json({error: 'id not valid'})

        const subscriber = await Subscriber.findByIdAndDelete(id)
        if(!subscriber) return res.status(404).json({error: 'subscriber not found'})

        return res.status(200).json(subscriber)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    getAllSubscribers,
    addSubscriber,
    deleteSubscriber,    
}
