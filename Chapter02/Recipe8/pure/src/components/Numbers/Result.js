import React, { PureComponent } from 'react';

class Result extends PureComponent {
  render() {
    return <li>{this.props.result}</li>;
  }
}

export default Result;
