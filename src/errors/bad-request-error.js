const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  statusCode = 400;

  // ALLOWS/REQUIRES FOR CUSTOM MESSAGES WHEN THROWING THIS ERROR
  constructor(message) {
    super(message);
  }
}

module.exports = BadRequestError;
