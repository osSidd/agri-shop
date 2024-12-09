const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author:{
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        required: true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
    },

}, {timestamps:true})

module.exports = mongoose.model('Comment', CommentSchema)