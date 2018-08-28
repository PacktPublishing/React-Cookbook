// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device
});

export default rootReducer;
