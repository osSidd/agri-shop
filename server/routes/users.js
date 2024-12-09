var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  userLogin,
  userLogout,
  userSignup,
  deleteUser,
  editUser
} = require('../controllers/userController');

const fileUpload = require('../middleware/uploadFile')
const upload = fileUpload('uploads/users')

//get all users
router.get('/', getAllUsers);

//edit a user
router.patch('/:id', editUser);

//delete a user
router.delete('/:id', deleteUser);

//for user login
router.post('/login', userLogin)

//user log out
router.get('/logout', userLogout)
 
//for user signup
router.post('/signup', upload.single('avatar'), userSignup)

module.exports = router;
