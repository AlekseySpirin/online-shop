const express = require('express');
const router = express.Router();
const {
	getOne,
	create,
	getAll
} = require('../controllers/deviceController');
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;
