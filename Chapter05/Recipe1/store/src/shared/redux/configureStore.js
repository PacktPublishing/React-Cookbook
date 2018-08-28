// Dependencies
import { createStore } from 'redux';

// Root Reducer
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
