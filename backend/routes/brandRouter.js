const express = require('express');
const router = express.Router();
const {
	create,
	getAll
} = require('../controllers/brandController');
const {checkRole} = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);

module.exports = router;
