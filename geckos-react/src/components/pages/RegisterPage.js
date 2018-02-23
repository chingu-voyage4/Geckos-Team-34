import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import RegisterForm from '../forms/RegisterForm';
import api from '../../api';

class RegisterPage extends Component {
  static propTypes = {
    history: shape({
      push: func
    }).isRequired
  }

  submit = async(data) => {
    await api.user.register(data);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="ui container">
        <RegisterForm submit={this.submit} />
      </div>
    );
  }
}

export default RegisterPage;
