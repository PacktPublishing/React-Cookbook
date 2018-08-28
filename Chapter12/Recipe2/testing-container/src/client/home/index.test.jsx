// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Component to test...
import Home from './index';

describe('Home', () => {
  const subject = shallow(<Home />);
  const subjectWithProps = shallow(<Home name="Carlos" />);

  it('should render Home component', () => {
    expect(subject.length).toBe(1);
  });

  it('should render by default Hello World', () => {
    expect(subject.text()).toBe('Hello World');
  });

  it('should render the name prop', () => {
    expect(subjectWithProps.text()).toBe('Hello Carlos');
  });

  it('should has .Home class', () => {
    expect(subject.find('h1').hasClass('Home')).toBe(true);
  });
});
