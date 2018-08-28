import React, { Component } from 'react';
import c3 from 'c3';
import './Chart.css';

class Chart extends Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      }
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
