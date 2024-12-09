const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sessionSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
})

sessionSchema.methods.expired = function(){
    return this.expiresAt < (new Date())
}

module.exports = mongoose.model('session', sessionSchema)