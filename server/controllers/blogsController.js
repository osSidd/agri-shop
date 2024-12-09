const { default: mongoose } = require('mongoose');

const Blog = require('../models/blogs');
const Comment = require('../models/comment')

const getImageUrl = require('../utils/getImageUrl')

//get all blogs
const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find().select('-body -updatedAt -__v').sort({createdAt: -1}).populate('tags');
        return res.status(200).json(blogs)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get a specific blog
const getABlog = async (req, res) => {
    try{
        const id = req.params.id;
        const isIdValid = mongoose.Types.ObjectId.isValid(id);

        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const blog = await Blog.findById(id).populate('tags comments');
        
        if(!blog) return res.status(404).json({error: "blog not found"})

        return res.status(200).json(blog)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//post a new blog
const postNewBlog = async (req,res) => {
    try{
        const tags = req.body.tags.split(',')
        const cover = getImageUrl(req, 'cover')

        const blog = new Blog({...req.body,tags, cover});
        const newBlog = await blog.save();
        
        return res.status(201).json(newBlog);
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//update a blog
const updateABlog = async (req, res) => {
    try{
        const id = req.params.id;
        const isIdValid = mongoose.Types.ObjectId.isValid(id);

        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const blog = await Blog.findByIdAndUpdate(id, {...req.body});
        
        if(!blog) return res.status(404).json({error: "blog not found"})

        return res.status(200).json(blog)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete a blog
const deleteABlog = async (req, res) => {
    try{
        const id = req.params.id;
        const isIdValid = mongoose.Types.ObjectId.isValid(id);

        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const blog = await Blog.findByIdAndDelete(id);
        
        if(!blog) return res.status(404).json({error: "blog not found"})

        return res.status(200).json(blog)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    getAllBlogs,
    getABlog,
    postNewBlog,
    updateABlog,
    deleteABlog,
}