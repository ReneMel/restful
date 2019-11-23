var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/',function (req,res,next) {
    res.render('SeeUser')
});


module.exports= router;