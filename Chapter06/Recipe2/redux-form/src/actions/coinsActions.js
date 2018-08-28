// Dependencies
import axios from 'axios';

// Action Types
import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR
} from './actionTypes';

// Base Actions
import { request, received, error } from '../shared/redux/baseActions';

export const fetchCoins = () => dispatch => {
  // Dispatching our request action
  dispatch(request(FETCH_COINS_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(FETCH_COINS_ERROR));
    });
};
