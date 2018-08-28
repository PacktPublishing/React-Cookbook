import React, { Component } from 'react';
import styles from './Calculator.scss';

class Calculator extends Component {
  state = {
    number1: 0,
    number2: 0,
    result: 0
  };

  handleOnChange = e => {
    const { target: { value, name } } = e;

    this.setState({
      [name]: value
    });
  }

  handleResult = () => {
    this.setState({
      result: Number(this.state.number1) + Number(this.state.number2)
    });
  }

  render() {
    return (
      <div className={styles.Calculator}>
        <h1>Calculator</h1>

        <input
          name="number1"
          value={this.state.number1}
          onChange={this.handleOnChange}
        />

        {' + '}

        <input
          name="number2"
          value={this.state.number2}
          onChange={this.handleOnChange}
        />

        <button
          onClick={this.handleResult}
        >
          =
        </button>

        <input
          name="result"
          value={this.state.result}
        />
      </div>
    );
  }
}

export default Calculator;
