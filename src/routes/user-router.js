const express = require('express');
const userController = require('../controllers/user-controller');
const currentUser = require('../middlewares/currentUser');

const router = express.Router();

// currentUser middleware:
// - checks cookie to see if user is logged in
// - attaches user document to req.currentUser for later use
router.use(currentUser);

router.get('/', userController.getCurrentUser);
router.patch('/', userController.updateMe);
router.delete('/', userController.deleteMe);

module.exports = router;
