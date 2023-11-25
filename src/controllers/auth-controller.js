const authController = {};

authController.login = (req, res, next) => {
  console.log('authController login invoked');
};

authController.IslogggedIn = (req, res, next) => {
  console.log('authController IsloggedIn invoked');
};

module.exports = authController;
