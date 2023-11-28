const CustomError = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeError());
  }

  console.error('❌ Not Custom Error', err);
  res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};

module.exports = errorHandler;
