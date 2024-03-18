const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const FarmerSchema = new Schema({
    address: {
        type: String,
    }
})

const Farmer = User.discriminator('Farmer', FarmerSchema)

module.exports = mongoose.model('Farmer')