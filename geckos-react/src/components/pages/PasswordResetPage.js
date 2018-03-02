import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import { func, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import PasswordResetForm from '../forms/PasswordResetForm';
import { validateToken, resetUserPassword } from '../../actions/auth';

class PasswordResetPage extends Component {
  state = {
    loading: true,
    success: false
  }

  static propTypes = {
    validateToken: func.isRequired,
    match: shape({
      params: shape({
        token: string
      }).isRequired
    }).isRequired,
    resetUserPassword: func.isRequired,
    history: shape({
      push: func.isRequired
    }).isRequired
  }

  componentDidMount() {
    this.props.validateToken(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  submit = async(data) => {
    await this.props.resetUserPassword(data);
    this.props.history.push('/login');
  }

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
        { loading && <Message>Loading</Message> }
        { !loading && success && <PasswordResetForm submit={this.submit} token={token} /> }
        { !loading && !success && <Message>Invalid Token</Message> }
      </div>
    );
  }
}

export default connect(null, { validateToken, resetUserPassword })(PasswordResetPage);
