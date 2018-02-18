import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={HomePage} exact />
      </div>
    );
  }
}

export default App;
