import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    name: ''
  }

  async componentDidMount() {
    const data = await axios.get('/name');
    this.setState(() => {
      return {
        name: data.data.name
      };
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{ name }</h1>
      </div>
    );
  }
}

export default App;
