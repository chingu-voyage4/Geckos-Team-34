import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { func } from 'prop-types';
import validator from 'validator';

import InlineError from '../messages/InlineError';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {}
  }

  static propTypes = {
    submit: func.isRequired
  }

  onChange = (e) => {
    const elem = e.target;

    this.setState(() => {
      return {
        data: { ...this.state.data, [elem.name]: elem.value }
      };
    });
  }

  validate = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Password cannot be empty.';

    return errors;
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState(() => ({ errors }));

    if (Object.keys(errors).length === 0) {
      this.setState(() => ({ loading: true }));
      this.props.submit(this.state.data)
        .catch(err => this.setState(() => ({ errors: err.response.data.errors, loading: false })));
    }
  }

  render() {
    const { email, password, loading, errors } = this.state;
    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        {
          errors.global &&
            <Message negative>
              <Message.Header>BIG ERROR!</Message.Header>
              <p>{ errors.global }</p>
            </Message>
        }
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jake@superstar.com"
            value={email}
            onChange={this.onChange}
          />
          {
            errors.email && <InlineError message={errors.email} />
          }
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={this.onChange}
          />
          {
            errors.password && <InlineError message={errors.password} />
          }
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;