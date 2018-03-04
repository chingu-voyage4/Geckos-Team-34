import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  component: func.isRequired,
  isAuthenticated: bool.isRequired
};

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to='/dashboard' /> }  />
  );
};

GuestRoute.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(GuestRoute);
