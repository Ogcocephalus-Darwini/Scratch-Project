const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  // USER WHO WORKOUT BELONGS TO
  userId: mongoose.Types.ObjectId,
  // SET TO CURRENT DATE ON CREATION
  date: Date,
  notes: String,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
