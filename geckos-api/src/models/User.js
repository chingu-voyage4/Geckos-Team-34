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
  }
}, { timestamps: true });

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.createJWT = function createJWT() {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET || 'mysecretsecret1');
};

schema.methods.authUserJSON = function authUserJSON() {
  return {
    email: this.email,
    token: this.createJWT()
  };
};

export default mongoose.model('User', schema);
