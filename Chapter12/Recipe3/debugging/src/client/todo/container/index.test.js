// Dependencies
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

// Actions
import { fetchTodo } from '../actions';

// Testable Container
import Container from './index';

// Mocking Initial State
const mockInitialState = {
  todo: {
    list: [
      {
        id: 1,
        title: 'Go to the Gym'
      },
      {
        id: 2,
        title: 'Dentist Appointment'
      },
      {
        id: 3,
        title: 'Finish homework'
      }
    ]
  }
};

// Configuring Mock Store
const mockStore = configureStore()(mockInitialState);

// Mocking the Actions
jest.mock('../actions', () => ({
  fetchTodo: jest.fn().mockReturnValue({ type: 'mock-FETCH_TODO_SUCCESS' }),
}));

describe('Todo Container', () => {
  let mockParams;
  let container;

  beforeEach(() => {
    fetchTodo.mockClear();
    mockParams = {};
    mockStore.clearActions();
    container = shallow(<Container {...mockParams} store={mockStore} />);
  });

  it('should dispatch fetchTodo', () => {
    const { fetchTodo } = container.props();

    fetchTodo();

    const actions = mockStore.getActions();

    expect(actions).toEqual([{ type: 'mock-FETCH_TODO_SUCCESS' }]);
  });

  it('should map todo and get the todo list from Initial State', () => {
    const { todo } = container.props();
    const { todo: { list }} = mockInitialState;

    expect(todo).toEqual(list);
  });
});
