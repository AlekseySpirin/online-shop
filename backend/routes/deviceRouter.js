const express = require('express');
const router = express.Router();
const {
	getOne,
	create,
	getAll
} = require('../controllers/deviceController');
const {checkRole} = require("../middleware/checkRoleMiddleware");
router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;
