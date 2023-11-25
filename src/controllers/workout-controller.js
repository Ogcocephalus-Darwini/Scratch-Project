// const BadRequestError = require('../errors/bad-request-error');

const workoutController = {};

workoutController.getAllWorkouts = async (req, res) => {
  console.log('💥 workoutController.getAllWorkouts');

  res.json({ message: 'getMyWorkouts' });
};

workoutController.getWorkout = async (req, res) => {
  console.log('💥 workoutController.getWorkout');
  const { workId } = req.params;

  res.json({ message: 'getMyWorkouts' });
};

workoutController.createWorkout = async (req, res) => {
  console.log('💥 workoutController.createWorkout');

  res.json({ message: 'createWorkout' });
};

workoutController.deleteWorkout = async (req, res) => {
  console.log('💥 workoutController.deleteWorkout');

  res.json({ message: 'createWorkout' });
};

workoutController.createExercise = async (req, res) => {
  console.log('💥 workoutController.createExercise');

  res.json({ message: 'createExercise' });
};

workoutController.updateExercise = async (req, res) => {
  console.log('💥 workoutController.updateExercise');

  res.json({ message: 'updateExercise' });
};

workoutController.deleteExercise = async (req, res) => {
  console.log('💥 workoutController.deleteExercise');

  res.json({ message: 'deleteExercise' });
};

module.exports = workoutController;
