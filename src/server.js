const mongoose = require('mongoose');
const app = require('./app');
const DatabaseConnectionError = require('./errors/db-connection-error');
// TODO - Not needed after dotenv
const processX = require('../env.fake');

const PORT = processX.env.PORT || 5000;

const start = async () => {
  if (!processX.env.MONGO_URI) throw Error('MONGO_URI must be defined');
  // if (!process.env.JWT_KEY) throw Error('JWT_KEY must be defined');

  try {
    await mongoose.connect(processX.env.MONGO_URI, {});
    console.log('🍃 Connected to Databse');
  } catch (err) {
    throw new DatabaseConnectionError();
  }
  app.listen(PORT, () => {
    console.log(`💥 App listening on port ${PORT}`);
  });
};

start();
