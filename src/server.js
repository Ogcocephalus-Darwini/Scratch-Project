const mongoose = require('mongoose');
const app = require('./app');
const DatabaseConnectionError = require('./errors/db-connection-error');
const User = require('./models/user');
const Workout = require('./models/workout');
const Exercise = require('./models/exercise');

const PORT = process.env.PORT || 5000;

const start = async () => {
  if (!process.env.MONGO_URI) throw Error('MONGO_URI must be defined');
  if (!process.env.JWT_KEY) throw Error('JWT_KEY must be defined');
  if (!process.env.JWT_LIFETIME) throw Error('JWT_KEY must be defined');

  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('🍃 Connected to Databse');
  } catch (err) {
    throw new DatabaseConnectionError();
  }
  // await User.deleteMany();
  // await Workout.deleteMany();
  // await Exercise.deleteMany();
  app.listen(PORT, () => {
    console.log(`💥 App listening on port ${PORT}`);
  });
};

start();
