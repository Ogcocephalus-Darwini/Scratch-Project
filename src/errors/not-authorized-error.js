const CustomError = require('./custom-error');

class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor(message) {
    super('Not Authorized');
  }
}

module.exports = NotAuthorizedError;
