const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubscriberSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validator: {
            validator: v => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(v)
        }
    }
})

module.exports = mongoose.model('Subscriber', SubscriberSchema)