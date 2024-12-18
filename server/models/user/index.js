const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        validate: {
            validator: v => v.length,
            message: 'Name is required'
        }
    },
    username: {
        type: String,
        required: this.type !== 'farmer' ? true : false,
        minLength: 5,
    },
    type: {
        type: String,
        required: this.type === 'farmer' ? true: false,
    },
    phone: {
        type: Number,
        validate:{
            validator: v => !parseInt(v / (10**10)),
            message: 'Invalid mobile number'
        }
    },
    email: {
        type: String,
        required: this.type !== 'farmer' ? true: false,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    }
})

module.exports = mongoose.model('User', UserSchema)