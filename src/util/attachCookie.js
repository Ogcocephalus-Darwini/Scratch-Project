const attachCookie = (res, token) => {
  // SET COOKIE ON RESPONSE OBJECT
  res.cookie('token', token, {
    // SECURE IT FROM MANIPULATION CLIENTSIDE
    httpOnly: true,
    // EXPIRES IN 1 DAY
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    // ONLY NEEDS TO BE SECURE IN PRODUCTION
    secure: false,
    // secure: process.env.NODE_ENV === 'production',
  });
};

module.exports = attachCookie;
