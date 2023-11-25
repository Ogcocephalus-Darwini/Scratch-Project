const jwt = require('jsonwebtoken');
const jwtSecret = require('../../jwt');
const User = require('../models/user');
const NotAuthorizedError = require('../errors/not-authorized-error');

const currentUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new NotAuthorizedError();
  }

  try {
    const payload = jwt.verify(token, jwtSecret.JWT_KEY);
    const currentUser = await User.findById(payload.userId);
    req.currentUser = currentUser;
    return next();
  } catch (err) {
    throw new NotAuthorizedError();
  }
};

module.exports = currentUser;
