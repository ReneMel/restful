var express = require('express');
var router = express.Router();
var computerController = require('../controllers/computerController')


/* GET users listing. */
router.get('/', computerController.getAll);
router.get('/:Modelo', computerController.getOne);

router.post('/',computerController.register);
router.put('/:Modelo', computerController.update);
router.delete('/:Modelo',computerController.Delete);

module.exports = router;
