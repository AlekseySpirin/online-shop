const express = require('express');
const router = express.Router();
const {
	registration,
	login,
	getCurrentUser
} = require('../controllers/userController');
const {auth} = require("../middleware/auth");

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', auth, getCurrentUser);

module.exports = router;
