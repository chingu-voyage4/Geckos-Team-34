import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { string, func } from 'prop-types';

class PasswordResetForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: ''
    },
    loading: false,
    errors: {

    }
  }

  static propTypes = {
    submit: func.isRequired,
    token: string.isRequired
  }

  onChange = (e) => {
    const elem = e.target;

    this.setState(() => ({
      data: { ...this.state.data, [elem.name]: elem.value }
    }));
  }

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = 'Password cannot be empty.';
    if (data.password !== data.passwordConfirmation) errors.password = 'Passwords do not match!';

    return errors;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState(() => ({ errors }));

    if (Object.keys(errors).length === 0) {
      this.setState(() => ({ loading: true }));
      this.props.submit(this.state.data);
    }
  }

  render() {
    const { loading, data, errors } = this.state;
    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Enter new password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.onChange}
            value={data.password}
            placeholder="******"
          />
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="passwordConfirmation">Enter password again</label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            onChange={this.onChange}
            value={data.passwordConfirmation}
            placeholder="******"
          />
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form>
    );
  }
}

export default PasswordResetForm;
