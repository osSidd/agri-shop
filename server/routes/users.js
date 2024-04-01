var express = require('express');
var router = express.Router();
var {createUser, loginUser} = require('../controllers/user')
var auth = require('../middleware/auth')

/* GET users listing. */
router.get('/', auth, function(req, res, next) {
  res.send('respond with a resource');
});

//register user
router.post('/register', createUser)

//login user
router.post('/login', loginUser)

module.exports = router;
