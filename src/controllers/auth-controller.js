const authController = {};

authController.signup = (req, res, next) => {
  console.log('💥 authController.signup');
  const { username, password, passwordConfirm } = req.body;

  res.send({ msg: 'authController - signup' });
};

authController.login = (req, res, next) => {
  console.log('💥 authController.login');

  res.send({ msg: 'authController - login' });
};

authController.logout = (req, res, next) => {
  console.log('💥 authController.logout');

  res.send({ msg: 'authController - logout' });
};

module.exports = authController;
