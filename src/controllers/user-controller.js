const BadRequestError = require('../errors/bad-request-error');
const NotAuthorizedError = require('../errors/not-authorized-error');
const User = require('../models/user');

const userController = {};

// THIS ROUTE IS CALLED ONCE WHEN CLIENT LOADS
userController.getCurrentUser = async (req, res) => {
  console.log('💥 userController.getCurrentUser');
  // CURRENT USER AVAILABLE FROM currentUser middleware
  const { currentUser } = req;

  // IF NO CURRENT USER - USER NOT LOGGED IN
  if (!currentUser) throw new NotAuthorizedError();

  // SEND BACK THE CURRENT USER
  res.status(200).json(currentUser);
};

// NOT IMPLEMENTED YET
userController.updateMe = async (req, res) => {
  console.log('💥 userController.updateMe');

  res.json({ message: 'updateMe' });
};

// WORKING BUT NOT IMPLMENTED ON THE CLIENT
userController.deleteMe = async (req, res) => {
  console.log('💥 userController.deleteMe');
  // CURRENT USER AVAILABLE FROM currentUser middleware
  const { currentUser } = req;

  // if no currentUser - not authorized to delete
  if (!currentUser) throw new NotAuthorizedError();

  // FIND USER AND DELETE
  await User.findByIdAndDelete(currentUser._id);

  // SET COOKIE TO NULL
  res.cookie('token', null, {
    httpOnly: true,
    expires: new Date(Date.now() + 500),
  });

  res.status(200).json({ message: 'User Deleted' });
};

module.exports = userController;
