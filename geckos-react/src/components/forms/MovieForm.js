import React, { Component } from 'react';
import Dropdown, { Form, Button, Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MovieForm extends Component {
  state = {
    title: '',
    director: '',
    plot: '',
    language: '',
    movieRating: '',
    rating: 0
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
  onRateChange = (e, { rating }) => this.setState({ rating })

  onSubmit = () => {
    this.props.submit(this.state);
  }

  render() {
    const { title, plot, language, movieRating, director, rating } = this.state;

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
          <label htmlFor="director">Director</label>
          <input
            type="text"
            id="director"
            name="director"
            onChange={this.onInputChange}
            value={director}
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
        <Form.Group widths='equal'>
        <Form.Field>
          <label htmlFor="language">Language</label>
          <select
            name="language"
            id="language"
            onChange={this.onInputChange}
            value={language}
          >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="chinese">Chinese</option>
           </select> 
        </Form.Field>
        <Form.Field>
          <label htmlFor="movieRating">Rating</label>
          <select
            name="movieRrating"
            id="movieRating"
            onChange={this.onInputChange}
            value={movieRating}
          >
              <option value="g">G</option>
              <option value="pg">PG</option>
              <option value="pg-13">PG-13</option>
              <option value="r">R</option>
           </select> 
        </Form.Field>
        </Form.Group>
          <Rating     
            defaultRating={1}
            maxRating={5}
            icon='star'
            name="rating"
            id="rating"
            onRate={this.onRateChange}
            >
          </Rating>
       
        <Button primary>Add Movie</Button>
      </Form>
    );
  }
};

export default MovieForm;