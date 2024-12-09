const express = require('express')
const router = express.Router()

const {getAllSubscribers, addSubscriber, deleteSubscriber} = require('../controllers/subscriber')

//get all subscribers
router.get('/', getAllSubscribers)

//add new subscriber
router.post('/', addSubscriber)

//delete a subscriber
router.delete('/:id', deleteSubscriber)

module.exports = router