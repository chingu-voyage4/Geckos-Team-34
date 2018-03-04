import validator from 'validator';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import { sendConfirmationEmail, sendResetPasswordEmail } from '../mailer';

function handleResponse(res, code, statusObj) {
  res.status(code).json(statusObj);
}

export const register = async(req, res, next) => {
  const { username, email, password } = req.body;

  const validationErrors = {};
  if (!validator.isLength(username, { min: 6, max: 16 })) {
    validationErrors.username = 'Username must be between 6-16 characters.';
  }
  if (!email) validationErrors.email = 'Email required.';
  if (!validator.isEmail(email)) validationErrors.email = 'Email is not valid';
  if (!validator.isLength(password, { min: 6, max: 18 })) {
    validationErrors.password = 'Password must be between 6-18 characters.';
  }

  if (Object.keys(validationErrors).length > 0) {
    handleResponse(res, 417, { status: 'error', details: validationErrors });
  } else {
    const user = User({ username, email });
    user.setConfirmationToken();
    user.hashPassword(password);

    try {
      const newUser = await user.save();
      sendConfirmationEmail(newUser);
      handleResponse(res, 200, { status: 'success' });
    } catch(err) {
      handleResponse(res, 500, { status: 'error', message: err });
    }
  }
};

export const login = async(req, res) => {
  const { email, password } = req.body.credentials;
  const user = await User.findOne({ email });

  if (user && user.isValidPassword(password)) {
    handleResponse(res, 200, { user: user.authUserJSON() });
  } else {
    handleResponse(res, 400, { errors: { global: 'Invalid email or password' } });
  }
};

export const confirm = async(req, res) => {
  const { token } = req.body;

  try {
    await User.findOneAndUpdate(
      { confirmationToken: token },
      { confirmationToken: '', confirmed: true },
      { new: true }
    );

    handleResponse(res, 200, { status: 'success' });
  } catch(err) {
    handleResponse(res, 400, { status: 'error', message: err });
  }
};

export const resetPassword = async(req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    sendResetPasswordEmail(user);
    handleResponse(res, 200, { status: 'success' });
  } catch(err) {
    handleResponse(res, 400, { status: 'error', message: 'Can\'t find user with provided email.' });
  }
};

export const validateToken = (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err) => {
    if (err) {
      handleResponse(res, 401, {});
    } else {
      handleResponse(res, 200, {});
    }
  });
};

export const resetUserPassword = async(req, res) => {
  const { password, token } = req.body;
  jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
    if (err) {
      handleResponse(res, 401, { status: 'error', errors: { global: 'Invalid token.' } });
    } else {
      try {
        const user = await User.findOne({ _id: decoded._id });
        user.hashPassword(password);
        user.save();
        handleResponse(res, 200, {});
      } catch(err) {
        handleResponse(res, 404, { status: 'error', errors: { global: 'Invalid token.' } });
      }
    }
  });
};
