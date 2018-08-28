import React, { Component } from 'react';
// We import our Home.css file here
import './Home.css';

class Home extends Component {
  render() {
    // Style object...
    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black'
    };

    return (
      <div className="Home">
        <p>
          In this recipe you will learn how to add styles to components.
          If you want to learn more you can visit our Youtube Channel at <a href="http://youtube.com/codejobs">Codejobs</a>.
        </p>

        <p>
          <button style={buttonStyle}>Click me!</button>
        </p>
      </div>
    );
  }
}

export default Home;
