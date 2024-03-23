const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const FarmerSchema = new Schema({
    address: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 300,
    },
    gstin: {
        type: String,
        required: true,
        validate:{
            validator: v => v.length === 15 && /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v),
            message: 'invalid gstin',
        }
    }
})

const Farmer = User.discriminator('Farmer', FarmerSchema)

module.exports = mongoose.model('Farmer')