import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import MovieDisplay from './components/MovieDisplay';



class App extends Component {
  render() {
    return (
      <BrowserRouter>      
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/movies/:id' component={MovieDisplay} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
