const Router = require('express');
const router = new Router();
const {
	getOne,
	create,
	getAll
} = require('../controllers/deviceController');
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;
