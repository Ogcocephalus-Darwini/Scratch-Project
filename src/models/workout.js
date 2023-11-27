const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  //workout Id created here
  //userId assighned by some logic
  userId: mongoose.Types.ObjectId,
  //information stored
  date: Date,
  notes: String,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
