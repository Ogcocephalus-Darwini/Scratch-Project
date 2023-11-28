const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../jwt');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    // WHEN TRANSFORMING DOCUMENT TO JSON: (when sending document in responses)
    // DELETE THE _id, __v and password properties - not received clientside
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  },
);

// ====BCRYPT ENCRYPTION====
//userProfile Password Encryptions using Bcrypt
userSchema.pre('save', async function () {
  // CHECK IF PASSWORD HAS BEEN MODIFED - IF NOT, DO NOT REHASH A HASHED PASSWORD
  // USEFUL IF USER IS UPDATING OTHER PROPERTIES LIKE USERNAME OR PROFILE PICTURE
  if (!this.isModified('password')) return;

  // HASH PASSWORD
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

// JWT CREATION - METHOD AVAILABLE ON ALL USER DOCS
userSchema.methods.createJwt = function () {
  // NOTE: JWT_KEY and JET_LIFETIME - defined in a file jwt.js - ignored in .gitignore
  return jwt.sign({ userId: this._id }, jwtSecret.JWT_KEY, {
    expiresIn: jwtSecret.JWT_LIFETIME,
  });
};

// PASSWORD CHECKING ON LOGIN - METHOD AVAILABLE ON ALL USER DOCS
userSchema.methods.comparePassword = async function (providedPassword) {
  const isMatch = await bcrypt.compare(providedPassword, this.password);
  return isMatch;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
