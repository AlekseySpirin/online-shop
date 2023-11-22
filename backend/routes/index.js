const express = require('express');
const router = express.Router();

const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);
router.use('/user', userRouter);

module.exports = router;
