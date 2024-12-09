const express = require('express')
const router = express.Router()

const {
    getAllBlogs,
    getABlog,
    postNewBlog,
    updateABlog,
    deleteABlog
} = require('../controllers/blogsController')

const auth = require('../middleware/auth')

const fileUpload = require('../middleware/uploadFile')
const upload = fileUpload('uploads/blogs/cover')

//get all blogs
router.get('/', getAllBlogs);

//get a blog
router.get('/:id', getABlog);

//post a new blog
router.post('/', auth, upload.single('cover'), postNewBlog);

//patch a blog
router.patch('/:id', auth, updateABlog);

//delete a blog
router.delete('/:id', auth, deleteABlog);

module.exports = router