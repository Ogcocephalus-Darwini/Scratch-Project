const CustomError = require('./custom-error');

class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor(message) {
    // SETS THE MESSAGE FOR THIS ERROR
    super('Not Authorized');
  }
}

module.exports = NotAuthorizedError;
