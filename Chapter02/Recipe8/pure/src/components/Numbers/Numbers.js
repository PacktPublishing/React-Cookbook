// Dependencies
import React, { Component } from 'react';

// Components
import Result from './Result';

// Styles
import './Numbers.css';

class Numbers extends Component {
  state = {
    numbers: '', // Here we will save the input value
    results: []  // In this state we will save the results of the sums
  };

  handleNumberChange = e => {
    const { target: { value } } = e;

    // Converting the value string to array
    // "12345" => ["1", "2", "3", "4", "5"]
    const numbers = Array.from(value);

    // Summing all numbers from the array
    // ["1", "2", "3", "4", "5"] => 15
    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    // Updating the local state
    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  }

  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          value={this.state.numbers}
          onChange={this.handleNumberChange}
          placeholder="Write numbers here..."
        />

        {/* Rendering the results array */}
        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Numbers;
