const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  //workoutId assighned by some logic
  workoutId: mongoose.Types.ObjectId,
  //exercise type, or name
  name: String,
  //Should be Initialized as an array, and populated
  sets: [
    {
      target_reps: Number,
      target_weight: Number,
      actual_reps: Number,
      actual_weight: Number,
    },
  ],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

// const repsSchema = new Schema({
//   type: String,
//   target_Reps: String,
//   actual_Reps: String,
// });

// const timeSchema = new Schema({
//   type: String,
//   target_time: String,
//   actual_time: String,
// });
