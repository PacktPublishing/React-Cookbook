// Action Types
import {
  FETCH_COINS_SUCCESS
} from '../actions/actionTypes';

// Utils
import { getNewState } from '../shared/utils/frontend';

// Initial State
const initialState = {
  coins: []
};

export default function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COINS_SUCCESS: {
      const { payload: coins } = action;

      return getNewState(state, {
        coins
      });
    }

    default:
     return state;
  }
};
