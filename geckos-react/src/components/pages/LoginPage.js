import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  static propTypes = {
    login: func.isRequired,
    history: shape({ push: func })
  }

  submit = async(data) => {
    await this.props.login(data);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="ui container">
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);