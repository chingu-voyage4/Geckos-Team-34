import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  component: func.isRequired,
  isAuthenticated: bool.isRequired
};

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => isAuthenticated ? <Component {...props} /> : <Redirect to='/' /> }  />
  );
};

UserRoute.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(UserRoute);
