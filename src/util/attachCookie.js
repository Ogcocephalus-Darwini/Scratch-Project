const attachCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    // expires: new Date(Date.now() + 5000),
    secure: false,
    // secure: process.env.NODE_ENV === 'production',
  });
};

module.exports = attachCookie;
