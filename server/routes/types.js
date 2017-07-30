const express = require('express');
var router = express.Router();
var controller = require('../controllers/typeController');
var jwtHelper = require('../helpers/jwt')

router.get('/', controller.getAllTypes);
router.post('/', jwtHelper, controller.createType);
router.delete('/:id', jwtHelper, controller.removeType);
router.put('/:id', jwtHelper, controller.updateType);

module.exports = router;