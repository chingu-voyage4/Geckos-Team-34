import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MovieForm extends Component {
  state = {
    title: '',
    plot: ''
  }

  static propTypes = {
    submit: PropTypes.func.isRequired
  }

  onInputChange = (e) => {
    const elem = e.target;
    const stateObj = {};

    stateObj[elem.name] = elem.value;
    this.setState(stateObj);
  }

  onSubmit = () => {
    this.props.submit(this.state);
  }

  render() {
    const { title, plot } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Mean Girls"
            onChange={this.onInputChange}
            value={title}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="plot">Plot</label>
          <textarea
            name="plot"
            id="plot"
            cols="30"
            rows="10"
            onChange={this.onInputChange}
            value={plot}
          >
          </textarea>
        </Form.Field>
        <Button primary>Add Movie</Button>
      </Form>
    );
  }
};

export default MovieForm;