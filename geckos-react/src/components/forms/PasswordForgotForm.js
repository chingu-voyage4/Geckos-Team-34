import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { func } from 'prop-types';

class PasswordResetForm extends Component {
  state = {
    data: {
      email: ''
    },
    loading: false
  }

  static propTypes = {
    submit: func.isRequired
  }

  onChange = (e) => {
    const elem = e.target;

    this.setState(() => ({
      data: { ...this.state.data, [elem.name]: elem.value }
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({ loading: true }));
    this.props.submit(this.state.data);
  }

  render() {
    const { loading, data } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
            placeholder="sample@email.com"
            value={data.email}
          />
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form>
    );
  }
}

export default PasswordResetForm;
