const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, 'Title cannot be blank.']
  },
  Year: {
    type: Number,
    min: 1888,
    max: 2025,
  },
  Rated: {
    type: String,
  },
  Released: {
    type: Date,
  },
  Runtime: {
    type: String,
  },
  Genre: {
    type: Array,
  },
  Tags: {
    type: Array,
  },
  Director: {
    type: Array,
  },
  Writer: {
    type: Array,
  },
  Actors: {
    type: Array,
  },
  Plot: {
    type: String,
  },
  Language: {
    type: String,
  },
  Country: {
    type: Array,
  },
  Awards: {
    type: String,
  },
  Poster: {
    type: String,
  },
  Ratings: {
    type: Array,
  },
  GeckoScore: {
    type: String,
  },
  Metascore: {
    type: String,
  },
  imdbRating: {
    type: String,
  },
  imdbVotes: {
    type: String,
  },
  imdbID: {
    type: String,
  },
  Type: {
    type: String,
  },
  DVD: {
    type: Date,
  },
  BoxOffice: {
    type: String,
  },
  Production: {
    type: Array,
  },
  Producers: {
    type: Array,
  },
  Website: {
    type: String,
  },
  Response: {
    type: Boolean,
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;