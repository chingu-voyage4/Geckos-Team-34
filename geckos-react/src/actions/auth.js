import api from '../api';
import { USER_LOGGED_IN } from '../types';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

export const login = (credentials) => {
  return async(dispatch) => {
    // make an api request
    const user = await api.user.login(credentials);
    // store the token
    localStorage.geckosJWT = user.token;
    // dispatch an action for user logging in
    dispatch(userLoggedIn(user));
  };
};