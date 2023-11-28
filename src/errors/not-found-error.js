const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(message) {
    // SETS THE MESSAGE FOR THIS ERROR
    super('Not Found Error');
  }
}

module.exports = NotFoundError;
