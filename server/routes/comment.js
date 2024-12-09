const express = require('express')
const router = express.Router()

const {getAllComments, postComment, updateComment, increaseLikes, deleteComment} = require('../controllers/commentController')
const auth = require('../middleware/auth')

//get all comments of a blog
router.get('/:id', getAllComments)

//create a comment
router.post('/:id', auth, postComment)
 
//updata a comment
router.patch('/:id', auth, updateComment)

//increase likes
router.patch('/:id', auth, increaseLikes)

//delete a comment
router.delete('/:blogId/:commentId', auth, deleteComment)

module.exports = router