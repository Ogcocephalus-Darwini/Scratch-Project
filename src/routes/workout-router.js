const express = require('express');
const workoutController = require('../controllers/workout-controller');
const currentUser = require('../middlewares/currentUser');

const router = express.Router();

// currentUser middleware
// checks user is logged in - attaches user document to req.currentUser
router.use(currentUser);

router.post('/', workoutController.createWorkout);
router.post('/exercise', workoutController.createExercise);

// NOT IMPLEMENTED YET
router.get('/', workoutController.getAllWorkouts);
router.get('/:workoutId', workoutController.getWorkout);
router.delete('/', workoutController.deleteWorkout);
router.patch('/exercise', workoutController.updateExercise);
router.delete('/exercise', workoutController.deleteExercise);

module.exports = router;
