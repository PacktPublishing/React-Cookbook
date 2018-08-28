// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Component to test...
import Calculator from './index';

describe('Calculator', () => {
  const subject = shallow(<Calculator />);

  it('should render Calculator component', () => {
    expect(subject.length).toBe(1);
  });

  it('should modify the state onChange', () => {
    subject.find('input[name="number1"]').simulate('change', {
      target: {
        name: 'number1',
        value: 5
      }
    });

    subject.find('input[name="number2"]').simulate('change', {
      target: {
        name: 'number2',
        value: 15
      }
    });

    // Getting the values of the number1 and number2 states
    expect(subject.state('number1')).toBe(5);
    expect(subject.state('number2')).toBe(15);
  });

  it('should perform the sum when the user clicks the = button', () => {
    // Simulating the click event
    subject.find('button').simulate('click');

    // Getting the result value
    expect(subject.state('result')).toBe(20);
  });
});
