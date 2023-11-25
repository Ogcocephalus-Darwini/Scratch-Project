const express = require('express');
const userController = require('../controllers/user-controller');
const currentUser = require('../middlewares/currentUser');

const router = express.Router();

router.use(currentUser);
router.patch('/', userController.updateMe);
router.delete('/', userController.deleteMe);

module.exports = router;
