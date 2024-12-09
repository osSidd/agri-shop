const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        validate: {
            validator: v => /^[A-Za-z\s]+$/.test(v)
        }
    }
})

module.exports = mongoose.model('Tag', tagSchema)