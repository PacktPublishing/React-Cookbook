import React from 'react';
import Popup from 'react-popup';
import Person from './Person/Person';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Header title="Personal Information" />

    <Content>
      <Person />
    </Content>

    <Footer />

    <Popup />
  </div>
);

export default App;
