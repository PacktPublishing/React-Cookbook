import React, { Component } from 'react';
import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />

        <Content>
          <Home />
        </Content>
        
        <Footer />
      </div>
    );
  }
}

export default App;
