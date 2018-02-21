import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { func } from 'prop-types';

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

  onSubmit = () => {
    this.setState(() => ({ loading: true }));
    this.props.submit(this.state.data);
  }

  render() {
    const { email, password, loading } = this.state;
    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jake@superstar.com"
            value={email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;