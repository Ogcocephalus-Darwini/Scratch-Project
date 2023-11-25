const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(message) {
    super('Not Found Error');
  }
}

module.exports = NotFoundError;
