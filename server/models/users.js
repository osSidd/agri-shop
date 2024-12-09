const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    avatar:{
        type: String,
    },
    name:{
        type:String,
        required:true,
        minLength:3,
        validate:{
            validator: v => /^[A-Za-z\s]+$/.test(v)
        }
    },
    username:{
        type: String,
        required: true,
        minLength: 5,
        validate:{
            validator: v => /^[A-Za-z0-9]+$/.test(v)
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: v => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(v)
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    confirmPassword:{
        type: String,
        required: true,
        minLength:8,
    },
})

module.exports = mongoose.model('User', UserSchema )