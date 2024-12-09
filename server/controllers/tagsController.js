const mongoose = require('mongoose')
const Tag = require('../models/tags')
const Blog = require('../models/blogs')

//get all tags
async function getAllTags(req, res, next){
    try{
        const tags = await Tag.find()
        if(!tags.length){
            return res.status(404).json({error: 'no tags found'})
        }
        return res.status(200).json(tags)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//get all blogs for a tag
async function getATags(req, res, next){
    try{
        const id = req.params.id

        if(id === 'ALL'){
            const blogs = await Blog.find().populate('tags')
            return res.status(200).json(blogs)
        }

        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(400).json({error: 'id not valid'})

        const tag = await Tag.findById(id)
        if(!tag) return res.status(404).json({error: 'tag not found'})

        const blogs = await Blog.find({tags: {$in: [tag._id]}}).populate('tags')
        
        return res.status(200).json(blogs)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//create a new tag
async function postTag(req, res, next){
    try{

        const name = req.body.name
        console.log(name)
        if(!name) return res.status(400).json({error: 'tag name required'})

        const tag = await Tag.create({name})
        return res.status(200).json(tag)

    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//delete a tags
async function deleteATags(req, res, next){
    try{

        const id = req.params.id
        
        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(400).json({error: 'id not valid'})

        const tag = await Tag.findByIdAndDelete(id)
        
        if(!tag){
            return res.status(404).json({error: 'tag not found'})
        }
        return res.status(200).json(tag)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//edit a tags
async function patchATags(req, res, next){
    try{

        const id = req.params.id
        
        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(400).json({error: 'id not valid'})

        const tag = await Tag.findByIdAndUpdate(id, {...req.body})
        
        if(!tag){
            return res.status(404).json({error: 'tag not found'})
        }
        return res.status(200).json(tag)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = {getAllTags, getATags, postTag, deleteATags, patchATags}