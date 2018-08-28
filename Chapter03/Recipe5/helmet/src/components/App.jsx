import React from 'react';
import Helmet from 'react-helmet';
import Person from './Person/Person';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Person Information</title>
      <meta name="title" content="Person Information" />
      <meta name="description" content="This recipe talks about React Helmet" />
    </Helmet>

    <Header title="Personal Information" />

    <Content>
      <Person />
    </Content>

    <Footer />
  </div>
);

export default App;
