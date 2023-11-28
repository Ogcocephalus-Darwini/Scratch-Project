const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  // WORKOUT THAT EXERCISE BELONGS TO
  workoutId: mongoose.Types.ObjectId,
  //exercise type, or name
  name: String,
  // INITIALIZE WITH ONE SET OBJECT
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
