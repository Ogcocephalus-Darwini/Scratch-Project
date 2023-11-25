const mongoose = require('mongoose');
//bcrypt is bottom of the page
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;
//=====REQUIRES DOT ENV BEFORE DEPLOYMENT======
//require('dotenv').config();

const userProfile = new Schema({
  //userId created here
  userId: mongoose.Types.ObjectId,
  //information stored
  userName: String,
  password: String,
  profilePicture: String,
});

const workoutSchema = new Schema({
  //workout Id created here
  //userId assighned by some logic
  workoutId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  //information stored
  date: String,
  notes: String,
});

const exerciseSchema = new Schema({
  //userId + workoutId assighned by some logic
  userId: mongoose.Types.ObjectId,
  workoutId: mongoose.Types.ObjectId,
  //exercise type, or name
  type: String,
  //Should be Initialized as an array, and populated
  sets: Object,
});

// Sample Set Data Templates
// These will be pushed into exercise Schema
const weightsSchema = new Schema({
  target_Weight: String,
  target_Reps: String,
  actual_Weight: String,
  actual_Reps: String,
});
const repsSchema = new Schema({
  type: String,
  target_Reps: String,
  actual_Reps: String,
});

const timeSchema = new Schema({
  type: String,
  target_time: String,
  actual_time: String,
});

// ====BCRYPT ENCRYPTION====
//userProfile Password Encryptions using Bcrypt
userProfile.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    this.password = hash;
  });
  return next();
});
