import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  static propTypes = {
    login: func.isRequired,
    history: shape({ push: func })
  }

  submit = async(data) => {
    await this.props.login(data);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="ui container">
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
        <Link to="/password_forgot">Forgot your password?</Link>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
