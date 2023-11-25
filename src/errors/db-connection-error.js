const CustomError = require('./custom-error');

class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  constructor() {
    super('Error Connecting to Database');
  }
}

module.exports = DatabaseConnectionError;
