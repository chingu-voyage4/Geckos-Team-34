import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HomePage.css';
import { logout } from '../../actions/auth';

const propTypes = {
  isAuthenticated: bool,
  logout: func.isRequired
};

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div className="ui container home-page">
      {
        isAuthenticated ?
          <button onClick={() => logout()}>logout</button>
          :
          <Link to='/login'>Login</Link>
      }
      <h1>Home Page</h1>
    </div>
  );
};

HomePage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout })(HomePage);
