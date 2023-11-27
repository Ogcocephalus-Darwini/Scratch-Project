// const BadRequestError = require('../errors/bad-request-error');

const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

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
  const { currentUser } = req;
  console.log(currentUser);

  const newWorkout = await Workout.create({
    userId: currentUser._id,
    date: new Date(Date.now()),
    notes: '',
  });

  res.json(newWorkout);
};

workoutController.deleteWorkout = async (req, res) => {
  console.log('💥 workoutController.deleteWorkout');

  res.json({ message: 'createWorkout' });
};

workoutController.createExercise = async (req, res) => {
  console.log('💥 workoutController.createExercise');
  const { workoutId, exerciseName } = req.body;
  console.log(workoutId);
  console.log(exerciseName);

  const newExercise = await Exercise.create({
    workoutId,
    name: exerciseName,
    sets: [
      {
        target_reps: 10,
        target_weight: 0,
        actual_reps: 0,
        actual_weight: 0,
      },
      {
        target_reps: 10,
        target_weight: 0,
        actual_reps: 0,
        actual_weight: 0,
      },
      {
        target_reps: 10,
        target_weight: 0,
        actual_reps: 0,
        actual_weight: 0,
      },
    ],
  });

  res.json(newExercise);
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
