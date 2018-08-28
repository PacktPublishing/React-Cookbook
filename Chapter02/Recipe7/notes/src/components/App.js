import React, { Component } from 'react';
import Notes from './Notes/Notes';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import { notes1, notes2 } from './Notes/data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // The first time we load the notes1
    this.state = {
      notes: notes1
    };
  }

  componentDidMount() {
    // After 10 seconds we concatenate our data with notes2
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <Header title="Notes" />

        <Content>
          <Notes notes={this.state.notes} />
        </Content>

        <Footer />
      </div>
    );
  }
}

export default App;
