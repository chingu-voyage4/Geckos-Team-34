import React, { Component } from 'react';
import api from '../../api';
import { func, shape } from 'prop-types';
import MovieForm from '../forms/MovieForm';

class MovieFormPage extends Component {
  static propTypes = {
    history: shape({ push: func })
  }
  submit = async(data) => {
    await api.movie.store(data);
    this.props.history.push('/movie');
  }

  render() {
    return (
      <div className="ui container">
        <h1>Add a movie</h1>
        <MovieForm submit={this.submit} />
      </div>
    );
  }
}

export default MovieFormPage;
