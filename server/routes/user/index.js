const express = require('express')
const router = express.Router()

const {
    createUser, 
    getUser, 
    updateUser, 
    deleteUser, 
    getFarmers,
    loginUser,
    logoutUser,
} = require('../../controllers/user')

//create a new user
router.post('/sign-up', createUser)

//get all farmers
router.get('/farmers', getFarmers)

//user login
router.post('/login', loginUser)

//user logout
router.get('/logout', logoutUser)

//get a specific user
router.get('/:id', getUser)

//update an existing user
router.patch('/:id', updateUser)

//delete a user
router.delete('/:id', deleteUser)

module.exports = router