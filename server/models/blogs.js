const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    cover: {
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        default: 'Osama',
    },
    snippet:{
        type:String,
        required:true,
    },
    tags:{
        type: [{type: Schema.Types.ObjectId, ref: 'Tag', required: true}],
        validate: v => Array.isArray(v) && v.length > 0
    },
    body:{
        type:String,
        required:true,
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment', required: true}],
}, {timestamps:true})


module.exports = mongoose.model('Blog', BlogSchema)