const express = require('express');
const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const workoutRouter = require('./workout-router');
const currentUser = require('../middlewares/currentUser');

const router = express.Router();

router.use('/auth', authRouter);
router.use(currentUser);
router.use('/me', userRouter);
router.use('/workout', workoutRouter);

module.exports = router;
