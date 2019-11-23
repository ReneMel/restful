var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');
var userController= require('../controllers/usersController')


router.get('/', function(req, res, next) {
  res.render('register');
});


router.post('/create', userController.register )


module.exports = router;