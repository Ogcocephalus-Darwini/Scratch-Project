const jwt = require('jsonwebtoken');
const jwtSecret = require('../../jwt');
const User = require('../models/user');
const NotAuthorizedError = require('../errors/not-authorized-error');

const currentUser = async (req, res, next) => {
  // GET TOKEN FROM COOKIE
  const token = req.cookies.token;

  // IF NO TOKEN SEND BACK EMPTY OBJECT - MAYBE THROW ERROR?
  if (!token) {
    // throw new NotAuthorizedError();
    return res.send({});
  }

  try {
    // USER ID STORED ON JWT - DECRYPT FROM JWT
    const payload = jwt.verify(token, jwtSecret.JWT_KEY);
    // GET USER FROM DECRYPTED JWT
    const currentUser = await User.findById(payload.userId);
    // ATTACH CURRENT USER TO REQUEST OBJECT
    req.currentUser = currentUser;
    return next();
  } catch (err) {
    throw new NotAuthorizedError();
  }
};

// NOTE - HAD PROBLEM GETTING process.env.JWT_KEY available in these files
// created a new file jwt.js to import these from
// see .gitignore - jwt.js was ignore to not expose secrets
// JWT_KEY is just random characters used to encrypt
// sample jwt.js:
// const jwtSecret = {};

// jwtSecret.JWT_KEY = 'fdj44jfds3adsjfASDfAJSDf';
// jwtSecret.JWT_LIFETIME = '1d';

// module.exports = jwtSecret;

module.exports = currentUser;
