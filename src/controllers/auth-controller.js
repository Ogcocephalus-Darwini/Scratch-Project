const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-error');
const attachCookie = require('../util/attachCookie');

const authController = {};

authController.signup = async (req, res, next) => {
  console.log('💥 authController.signup');
  const { username, password, passwordConfirm } = req.body;

  if (!username || !password || !passwordConfirm) {
    throw new BadRequestError('Invalid inputs');
  }
  if (password !== passwordConfirm) {
    throw new BadRequestError('Passwords do not match');
  }

  const existingUser = await User.findOne({
    username,
  });
  if (existingUser) {
    throw new BadRequestError('User already exists. Login instead');
    return;
  }

  const newUser = await User.create({
    username,
    password,
  });

  const userJwt = newUser.createJwt();
  attachCookie(res, userJwt);

  res.status(201).json(newUser);
};

authController.login = async (req, res, next) => {
  console.log('💥 authController.login');
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Invalid inputs');
  }

  const user = await User.findOne({ username });

  if (!user) throw new BadRequestError('User does not exist. Please sign up');

  const passwordsMatch = await user.comparePassword(password);
  if (!passwordsMatch) throw new BadRequestError('Invalid credentials');

  const userJwt = user.createJwt();
  attachCookie(res, userJwt);

  res.status(201).json(user);
};

authController.logout = (req, res, next) => {
  console.log('💥 authController.logout');
  res.cookie('token', null, {
    httpOnly: true,
    expires: new Date(Date.now() + 500),
  });
  res.status(200).json({ message: 'User Logged Out' });
};

module.exports = authController;
