var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
const passport = require('passport');
var jwtHelper = require('../helpers/jwt')

/* GET users listing. */
router.get('/', controller.getUsers);
router.post('/signin', passport.authenticate('local', {session: false}), controller.createToken);
router.post('/signup', controller.createUser);

module.exports = router;