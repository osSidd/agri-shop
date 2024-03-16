const mongoose = require('mongoose')
const UserSchema = require('./user')

module.exports = mongoose.model('Consumer', UserSchema)