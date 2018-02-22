import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
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

export const logout = () => {
  return (dispatch) => {
    // remove JWT from localStorage
    localStorage.removeItem('geckosJWT');
    // dispatch an action for user logging out
    dispatch(userLoggedOut());
  };
};