var express = require('express');
var router = express.Router();
var {createUser} = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//create a new user
router.post('/', createUser)

module.exports = router;
