import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmationToken: {
    type: String,
    default: ''
  }
}, { timestamps: true });

schema.methods.hashPassword = function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  this.passwordHash = bcrypt.hashSync(password, salt);
};

schema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.createJWT();
};

schema.methods.createResetPasswordToken = function createResetPasswordToken() {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1s" });
};

schema.methods.generateConfirmationURL = function generateConfirmationURL() {
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

schema.methods.generateResetPasswordLink = function generateResetPasswordLink() {
  return `${process.env.HOST}/password_reset/${this.createResetPasswordToken()}`;
};

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.createJWT = function createJWT() {
  return jwt.sign({
    email: this.email,
    confirmed: this.confirmed
  }, process.env.JWT_SECRET || 'mysecretsecret1');
};

schema.methods.authUserJSON = function authUserJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    token: this.createJWT()
  };
};

export default mongoose.model('User', schema);
