import React, { Component } from 'react';
import posed from 'react-pose';
import styled, { keyframes } from 'styled-components';
import { flip } from 'react-animations';
import './Animations.css';

const flipAnimation = keyframes`${flip}`;

const Circle = posed.div({
  normal: {
    scale: 1 // Normal state
  },
  hover: {
    scale: 3 // Hover state
  }
});

// Creating styled component
const StyledCircle = styled(Circle)`
  color: white;
  cursor: pointer;
  background: blue;
  line-height: 80px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

class Animations extends Component {
  state = {
    style: {
      background: 'blue'
    },
    hover: false
  };

  handleMouseEnter = () => {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false
    });
  }

  handleClick = () => {
    // Choosing a random color...
    const colors = ['red', 'green', 'gray', 'orange', 'black', 'pink'];

    this.setState({
      style: {
        animation: `1s ${flipAnimation}`,
        background: colors[Math.floor(Math.random() * colors.length)]
      }
    });
  }

  render() {
    return (
      <div className="Animations">
        <StyledCircle
          pose={this.state.hover ? 'hover' : 'normal'}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          style={this.state.style}
        >
          Click me!
        </StyledCircle>
      </div>
    );
  }
}

export default Animations;
