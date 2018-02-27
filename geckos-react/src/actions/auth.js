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

export const confirm = (token) => {
  return async(dispatch) => {
    const user = await api.user.confirm(token);
    localStorage.geckosJWT = user.token;
    dispatch(userLoggedIn(user));
  };
};

export const resetPassword = ({ email }) => {
  return async(dispatch) => {
    const response = await api.user.resetPassword(email);
    console.log(response);
  };
};
