import React, { Component } from 'react';

import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {

  submit = async(data) => {
    console.log(data);
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

export default LoginPage;