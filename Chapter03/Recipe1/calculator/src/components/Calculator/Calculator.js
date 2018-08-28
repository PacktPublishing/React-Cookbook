  import React, { Component } from 'react';
  import './Calculator.css';

  class Calculator extends Component {
    constructor() {
      super();

      this.state = {
        number1: 0,
        number2: 0,
        result: 0
      };
    }

    handleOnChange = e => {
      const { target: { value, name } } = e;

      this.setState({
        [name]: Number(value)
      });
    }

    handleResult = e => {
      this.setState({
        result: this.state.number1 + this.state.number2
      });
    }

    render() {
      return (
        <div className="Calculator">
          <input onChange={this.handleOnChange} name="number1" type="text" value={this.state.number1} />
          {' + '}
          <input onChange={this.handleOnChange} name="number2" type="text" value={this.state.number2} />
          <p><button onClick={this.handleResult}>=</button></p>

          <p className="result">{this.state.result}</p>
        </div>
      );
    }
  }

  export default Calculator;
