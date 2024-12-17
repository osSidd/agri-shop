const express = require('express')
const router = express.Router()

const {createUser, getUser, updateUser, deleteUser} = require('../../controllers/user/userController')

//create a new user
router.post('/', createUser)

//get a specific user
router.get('/:id', getUser)

//update an existing user
router.patch('/:id', updateUser)

//delete a user
router.delete('/:id', deleteUser)

module.exports = router