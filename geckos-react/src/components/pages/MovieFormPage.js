import React, { Component } from 'react';

import MovieForm from '../forms/MovieForm';

class MovieFormPage extends Component {
  submit = async(data) => {
    console.log(data);
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