import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MovieFormPage from './components/pages/MovieFormPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/movie/add' component={MovieFormPage} exact />
      </div>
    );
  }
}

export default App;
