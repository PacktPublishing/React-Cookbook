import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Carlos'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Cristina'
      });
    }, 1000);
  }

  render() {
    console.log('Name:', this.state.name);

    return (
      <div className="Home">
        <p>Hi my name is {this.state.name}</p>
      </div>
    );
  }
}

export default Home;
