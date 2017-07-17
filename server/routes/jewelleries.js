const express = require('express');
var router = express.Router()
var controller = require('../controllers/jewelleryController');
var jwtHelper = require('../helpers/jwt');

router.get('/', controller.getAllJewelleries);
router.post('/', jwtHelper, controller.addJewellery);
router.delete('/:id', jwtHelper, controller.removeJewellery);
router.put('/:id', jwtHelper, controller.updateJewellery);
router.get('/:id', controller.getOneJewellery);

module.exports = router;
