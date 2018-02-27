import React, { Component } from 'react';
import { func } from 'prop-types';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import PasswordForgotForm from '../forms/PasswordForgotForm';
import { resetPassword } from '../../actions/auth';

class PasswordResetPage extends Component {
  state = {
    success: false
  }

  static propTypes = {
    resetPassword: func.isRequired
  }

  submit = (data) => {
    this.props.resetPassword(data).then(() => this.setState({ success: true }));
  }

  render() {
    return (
      <div className="ui container">
        {
          this.state.success ?
            <Message>Check your email.</Message>
            :
            <PasswordForgotForm submit={this.submit} />
        }
      </div>
    );
  }
}

export default connect(null, { resetPassword })(PasswordResetPage);
