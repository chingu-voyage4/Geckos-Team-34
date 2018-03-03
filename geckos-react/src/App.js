import React from 'react';
import { Route } from 'react-router-dom';
import { shape, string } from 'prop-types';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MovieFormPage from './components/pages/MovieFormPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import PasswordForgotPage from './components/pages/PasswordForgotPage';
import PasswordResetPage from './components/pages/PasswordResetPage';
import CreateBlogPostPage from './components/pages/CreateBlogPostPage';

const propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired
};

const App = ({ location }) => {
  return (
    <div>
      <Route location={location} path='/' component={HomePage} exact />
      <UserRoute location={location} path='/dashboard' component={DashboardPage} exact />
      <GuestRoute location={location} path='/login' component={LoginPage} exact />
      <Route location={location} path='/register' component={RegisterPage} exact />
      <Route location={location} path='/confirmation/:token' component={ConfirmationPage} exact />
      <GuestRoute location={location} path='/password_forgot' component={PasswordForgotPage} exact />
      <GuestRoute location={location} path='/password_reset/:token' component={PasswordResetPage} exact />
      <Route location={location} path='/movie/add' component={MovieFormPage} exact />
      <Route location={location} path='/blog/new_post' component={CreateBlogPostPage} exact />
    </div>
  );
};

App.propTypes = propTypes;

export default App;
