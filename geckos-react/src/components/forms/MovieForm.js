import React, { Component } from 'react';
import{ Form, Button, Rating } from 'semantic-ui-react';

import validator from 'validator';
import InlineError from '../messages/InlineError';
import ImageUpload from '../ImageUpload';
import PropTypes from 'prop-types';

class MovieForm extends Component {
  state = {
    title: '',
    director: '',
    plot: '',
    language: '',
    movieRating: '',
    rating: '',
    genre: '',
    releaseDate: '',
    producers: '',
    runTime: '',
    type: '',
    errors: {},
    loading: false
  }

  static propTypes = {
    submit: PropTypes.func.isRequired
  }

  validate = () => {
    const errors = {};
    if(!validator.isLength( this.state.title, { min: 2, max: 32 })) errors.title = 'Invalid Movie Title';
    if(!validator.isLength( this.state.director, { min: 2, max: 32 })) errors.director = 'Invalid Director Name';
    if(!validator.isLength( this.state.producers, { min: 2, max: 32 })) errors.producers = 'Invalid Producer Name';
    if(!validator.isLength( this.state.genre, { min: 2, max: 32 })) errors.genre = 'Invalid Genre Type';
    if(validator.isEmpty(this.state.plot)) errors.plot = 'Hey, you need to add a plot';
    if(!validator.isNumeric(this.state.runTime)) errors.runTime = 'Numbers only please';
    if(!validator.isNumeric(this.state.releaseDate)) errors.releaseDate = 'Numbers only please';

    return errors;
  }

  onInputChange = (e) => {
    const elem = e.target;
    const stateObj = {};

    stateObj[elem.name] = elem.value;
    this.setState(stateObj);
  }

  onRateChange = (e, { rating }) =>  {
    const stateObj = { rating };
    this.setState(stateObj);
  }

  onTypeChange = (e, { value }) => {
    const stateObj = { type: value };
    this.setState(stateObj);
  }

  onSubmit = () => {
    const errors = this.validate(this.state);
    this.setState(() => ({ errors }));

    if (Object.keys(errors).length === 0) {
      this.setState(() => ({ loading : true }));
      this.props.submit(this.state);
    }
  }

  getImgFile = (imgFile) => {
    const stateObj = { uploadedImage: imgFile };
    this.setState(stateObj);
  }

  render() {
    const { title, plot, language, movieRating, director, releaseDate,
      genre, producers, runTime, loading, errors } = this.state;

    return (
      <Form  loading={loading} onSubmit={this.onSubmit}>
        <Form.Group >
          <Form.Field width={4} error={!!errors.title}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Mean Girls"
              onChange={this.onInputChange}
              value={title}
            />
            {
              errors.title && <InlineError message={errors.title} />
            }
          </Form.Field>
          <Form.Field width={2} error={!!errors.releaseDate}>
            <label htmlFor="releaseDate">Release Date</label>
            <input
              placeholder="2018"
              type="text"
              maxLength={4}
              name="releaseDate"
              id="releaseDate"
              onChange={this.onInputChange}
              value={releaseDate}
            />
            {
              errors.releaseDate && <InlineError message={errors.releaseDate} />
            }
          </Form.Field>
          <Form.Field width={2} error={!!errors.runTime}>
            <label htmlFor="runTime">Run Time(mins)</label>
            <input
              placeholder="120"
              type="text"
              maxLength={3}
              name="runTime"
              id="runTime"
              onChange={this.onInputChange}
              value={runTime}
            />
            {
              errors.runTime && <InlineError message={errors.runTime} />
            }
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <label>Type</label>
          <Form.Radio label='Movie'
            name="type"
            value="movie"
            checked={this.state.type === "movie"}
            onChange={this.onTypeChange}
          />
          <Form.Radio label='TV'
            name="type"
            value="tv"
            checked={this.state.type === "tv"}
            onChange={this.onTypeChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label htmlFor="rating">Your rating</label>
          <Rating
            defaultRating={1}
            maxRating={5}
            icon="star"
            name="rating"
            id="rating"
            onRate={this.onRateChange}
          >
          </Rating>
        </Form.Group>
        <Form.Group>
          <Form.Field width={2} error={!!errors.genre}>
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Action"
              onChange={this.onInputChange}
              value={genre}
            />
            {
              errors.genre && <InlineError message={errors.genre} />
            }
          </Form.Field>
          <Form.Field width={4} error={!!errors.director}>
            <label htmlFor="director">Director</label>
            <input
              type="text"
              id="director"
              name="director"
              placeholder="Some Director"
              onChange={this.onInputChange}
              value={director}
            />
            {
              errors.director && <InlineError message={errors.director} />
            }
          </Form.Field>
          <Form.Field width={4} error={!!errors.producers}>
            <label htmlFor="producers">Producers</label>
            <input
              type="text"
              id="producers"
              name="producers"
              placeholder="Some producer"
              onChange={this.onInputChange}
              value={producers}
            />
            {
              errors.producers && <InlineError message={errors.producers} />
            }
          </Form.Field>
        </Form.Group>
        <Form.Field width={8} error={!!errors.plot}>
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
          {
            errors.plot && <InlineError message={errors.plot} />
          }
        </Form.Field>
        <Form.Group>
          <Form.Field width={2}>
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
          <Form.Field width={2}>
            <label htmlFor="movieRating">Rating</label>
            <select
              name="movieRating"
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
        <ImageUpload imgFile={this.getImgFile} />
        <Button primary>Add Movie</Button>
      </Form>
    );
  }
};

export default MovieForm;
