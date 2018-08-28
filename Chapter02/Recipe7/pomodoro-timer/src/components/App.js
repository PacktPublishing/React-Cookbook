import React, { Component } from 'react';
import Timer from './Pomodoro/Timer';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Pomodoro Timer" />

        <Content>
          <Timer />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
