import React, { Component } from 'react';
import Numbers from './Numbers/Numbers';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Understanding Pure Components" />

        <Content>
          <Numbers />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
