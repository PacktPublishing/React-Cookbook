// Dependencies
import React, { Component } from 'react';

// Components
import Tweets from './components/Tweets';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tweets />
      </div>
    );
  }
}

export default App;
