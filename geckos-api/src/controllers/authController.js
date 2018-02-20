import bcrypt from 'bcrypt';

import User from '../models/User';

function handleResponse(res, code, statusObj) {
  res.status(code).json(statusObj);
}

export const register = async(req, res) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);
  const user = User({ username, email, passwordHash });

  try {
    await user.save();
    handleResponse(res, 200, { status: 'success' });
  } catch(err) {
    handleResponse(res, 400, { status: 'error' });
  }
};