const express = require('express');
const router = express.Router();
const {
	registration,
	login,
	check
} = require('../controllers/userController');

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', check);

module.exports = router;
