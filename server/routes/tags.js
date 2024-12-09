const express = require('express')
const router = express.Router()

const {getATags, getAllTags, deleteATags, patchATags, postTag} = require('../controllers/tagsController')
const auth = require('../middleware/auth')

//get all tags
router.get('/', getAllTags)

//get all blogs for a tag
router.get('/:id', getATags)

//create a new tag
router.post('/', auth, postTag)

//delete a tag
router.delete('/:id', auth, deleteATags)

//edit a tag
router.put('/:id', auth, patchATags)

module.exports = router