const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-error');
const attachCookie = require('../util/attachCookie');

const authController = {};

authController.signup = async (req, res, next) => {
  console.log('💥 authController.signup');
  const { username, password, passwordConfirm } = req.body;

  // VALIDATE INPUTS
  if (!username || !password || !passwordConfirm) {
    throw new BadRequestError('Invalid inputs');
  }
  // VALIDATE INPUTS
  if (password !== passwordConfirm) {
    throw new BadRequestError('Passwords do not match');
  }
  // CHECK FOR EXISTING USER
  const existingUser = await User.findOne({
    username,
  });
  if (existingUser) {
    throw new BadRequestError('User already exists. Login instead');
  }

  // CREATE NEW USER
  const newUser = await User.create({
    username,
    password,
  });

  // CREATE JWT - method defined on userSchema
  const userJwt = newUser.createJwt();
  // ATTACH JWT TO COOKIE - see /utils/attachCookie
  attachCookie(res, userJwt);

  // SEND BACK NEW USER
  res.status(201).json(newUser);
};

authController.login = async (req, res, next) => {
  console.log('💥 authController.login');
  const { username, password } = req.body;

  // VALIDATE INPUTS
  if (!username || !password) {
    throw new BadRequestError('Invalid inputs');
  }

  // FIND THE USER
  const user = await User.findOne({ username });

  // IF NO USER THROW ERROR
  if (!user) throw new BadRequestError('User does not exist. Please sign up');

  // CHECK PASSWORDS - method defined on userSchema
  const passwordsMatch = await user.comparePassword(password);
  if (!passwordsMatch) throw new BadRequestError('Invalid credentials');

  // CREATE THE JWT AND ATTACH TO COOKIE
  const userJwt = user.createJwt();
  attachCookie(res, userJwt);

  // SEND BACK USER
  res.status(201).json(user);
};

authController.logout = (req, res, next) => {
  console.log('💥 authController.logout');
  // SET THE COOKIE TO NULL
  res.cookie('token', null, {
    httpOnly: true,
    expires: new Date(Date.now() + 500),
  });
  res.status(200).json({ message: 'User Logged Out' });
};

module.exports = authController;
