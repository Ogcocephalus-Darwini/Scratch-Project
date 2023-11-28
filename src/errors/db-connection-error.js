const CustomError = require('./custom-error');

class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  constructor() {
    // SET THE MESSAGE FOR THIS ERROR
    super('Error Connecting to Database');
  }
}

module.exports = DatabaseConnectionError;
