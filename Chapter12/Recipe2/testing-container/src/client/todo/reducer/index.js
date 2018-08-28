// Utils
import { getNewState } from '@utils/frontend';

// Action Types
import { FETCH_TODO } from '../actions/actionTypes';

// Initial State
const initialState = {
  list: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO.success(): {
      const { payload: { response = [] } } = action;

      return getNewState(state, {
        list: response
      });
    }

    default:
      return state;
  }
}
