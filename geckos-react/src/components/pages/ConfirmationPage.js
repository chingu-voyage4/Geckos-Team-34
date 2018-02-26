import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';

import { confirm } from '../../actions/auth';

class ConfirmationPoint extends Component {
  state = {
    loading: true,
    success: false
  }

  static propTypes = {
    confirm: func.isRequired,
    match: shape({
      params: shape({
        token: string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
      .then(() => this.setState(() => ({ loading: false, success: true })))
      .catch(() => this.setState(() => ({ loading: false, success: false })));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {
          loading &&
            <Message icon>
              <Icon name="circle notched" loading />
              <Message.Header>Validating email.</Message.Header>
            </Message>
        }

        {
          !loading && success &&
            <Message success icon>
              <Icon name="checkmark" />
              <Message.Content>
                <Message.Header>Your profile has been verified!</Message.Header>
                <Link to='/login'>Login now</Link>
              </Message.Content>
            </Message>
        }
      </div>
    );
  }
}

export default connect(null, { confirm })(ConfirmationPoint);
