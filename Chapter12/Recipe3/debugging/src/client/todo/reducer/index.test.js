// Reducer
import todo from './index';

// Action Types
import { FETCH_TODO } from '../actions/actionTypes';

// Initial State
const initialState = {
  list: []
};

describe('Todo List Reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = todo(undefined, {});

    expect(expectedInitialState).toEqual(initialState);
  });

  it('should handle FETCH_TODO when is success', () => {
    const action = {
      type: FETCH_TODO.success(),
      payload: {
        response: [
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

    const expectedState = {
      list: action.payload.response
    };

    const state = todo(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
