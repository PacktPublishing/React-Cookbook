// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import phrases from '../../reducers/phrasesReducer';
import device from './deviceReducer';

const rootReducer = combineReducers({
  phrases,
  device
});

export default rootReducer;
