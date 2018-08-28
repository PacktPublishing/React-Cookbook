// Dependencies
import { combineReducers } from 'redux';

// Components Reducers
import coins from '../../reducers/coinsReducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  coins,
  device
});

export default rootReducer;
