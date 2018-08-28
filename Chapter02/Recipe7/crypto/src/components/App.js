import React, { Component } from 'react';
import Coins from './Coins/Coins';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Crypto Coins Exchanger" />

        <Content>
          <Coins />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
