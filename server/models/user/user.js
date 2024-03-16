const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 30,
        validate:{
            validator: v => /[a-z][A-z]/.test(v)
        }
    },
    usertype: {
        type: String,
        required: true,
        enum: ['farmer', 'consumer']
    },
    username: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 30,
    },
    mobile:{
        type: String,
        require: true,
        validate: {
            validator: v => /[0-9]/.test(v) && v.length === 10
        }
    },
    email:{
        type: String,
        require: true,
        validate:{
            validator: v => /[a-z][A-Z][0-9]@./.test(v)
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 8,
        maxLength: 30,
        validate:{
            validator: v => /[a-z][A-Z][0-9]/i.test(v)
        }
    }
})

module.exports = UserSchema