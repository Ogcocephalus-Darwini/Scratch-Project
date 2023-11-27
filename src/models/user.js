const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../jwt');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  //userId created here
  //information stored
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: null,
  },
});

// ====BCRYPT ENCRYPTION====
//userProfile Password Encryptions using Bcrypt
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

userSchema.methods.createJwt = function () {
  return jwt.sign({ userId: this._id }, jwtSecret.JWT_KEY, {
    expiresIn: jwtSecret.JWT_LIFETIME,
  });
};

userSchema.methods.comparePassword = async function (providedPassword) {
  const isMatch = await bcrypt.compare(providedPassword, this.password);
  return isMatch;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
