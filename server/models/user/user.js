const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name is required'],
        minLength: [3, 'name is too short'],
        maxLength: [50, 'name cannot exceed 50 characters length'],
        validate:{
            validator: v => /^[a-zA-Z ]+$/i.test(v),
            message: 'Name must contain only alphabets'
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
        unique: [true, 'Username already taken'],
        minLength: 5,
        maxLength: 30,
    },
    mobile:{
        type: String,
        require: true,
        unique: [true, 'mobile number already exists'],
        validate: {
            validator: v => /^[0-9]+$/.test(v) && v.length === 10, 
            message: 'invalid mobile number',
        }
    },
    email:{
        type: String,
        unique: [true, 'email id already exists'],
        require: true,
        validate:{
            validator: v => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v),
            message: 'invalid email',
        }
    },
    password: {
        type: String,
        require: true,
        minLength: [8, 'password must have a minimum of 8 characters'],
        validate:{
            validator: v => /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(v) && v.length >= 8,
            message: "password doesn't meets the mentioned criteria",
        }
    }
})

module.exports = mongoose.model('User', UserSchema)