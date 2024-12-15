const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: v => v.length,
            message: 'Name length must be greater than 0'
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: v => v.length > 50,
            message: 'Description must be greater than 50 characters'
        }
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: v => v > 0,
            message: 'Price must be greater than 0'
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)