// Dependencies
import { combineReducers } from 'redux';

// App Reducers
import todo from '@todo/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  todo,
  device
});

export default rootReducer;
