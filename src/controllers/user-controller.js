const BadRequestError = require('../errors/bad-request-error');
const NotAuthorizedError = require('../errors/not-authorized-error');
const User = require('../models/user');

const userController = {};

userController.updateMe = async (req, res) => {
  console.log('💥 userController.updateMe');

  res.json({ message: 'updateMe' });
};

userController.deleteMe = async (req, res) => {
  console.log('💥 userController.deleteMe');
  console.log('💥 req', req);
  const { currentUser } = req;
  if (!currentUser) throw new NotAuthorizedError();

  await User.findByIdAndDelete(currentUser._id);

  res.cookie('token', null, {
    httpOnly: true,
    expires: new Date(Date.now() + 500),
  });

  res.status(200).json({ message: 'User Deleted' });
};

module.exports = userController;
