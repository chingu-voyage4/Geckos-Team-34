import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} exact />
      </div>
    );
  }
}

export default App;
