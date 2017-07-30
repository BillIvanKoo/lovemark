const express = require('express');
var router = express.Router();
var controller = require('../controllers/categoryController');
var jwtHelper = require('../helpers/jwt')

router.get('/', controller.getAllCategories);
router.post('/', jwtHelper, controller.createCategory);
router.delete('/:id', jwtHelper, controller.removeCategory);
router.put('/:id', jwtHelper, controller.updateCategory);

module.exports = router;