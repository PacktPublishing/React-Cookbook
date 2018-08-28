// Dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Components Reducers
import coins from '../../reducers/coinsReducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  coins,
  device,
  form: formReducer
});

export default rootReducer;
