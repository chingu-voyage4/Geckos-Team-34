const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('');

mongoose.Promise = Promise;

module.exports.Movie = require('./movie');