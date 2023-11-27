const express = require('express');
const workoutController = require('../controllers/workout-controller');
const currentUser = require('../middlewares/currentUser');

const router = express.Router();

router.use(currentUser);
router.get('/', workoutController.getAllWorkouts);
router.get('/:workoutId', workoutController.getWorkout);
router.post('/', workoutController.createWorkout);
router.delete('/', workoutController.deleteWorkout);
router.post('/exercise', workoutController.createExercise);
router.patch('/exercise', workoutController.updateExercise);
router.delete('/exercise', workoutController.deleteExercise);

module.exports = router;
