// Base Actions
import { request, received } from '@baseActions';

// Api
import api from '../api';

// Action Types
import { FETCH_TODO } from './actionTypes';

export const fetchTodo = () => dispatch => {
  const action = FETCH_TODO;
  const { fetchTodo } = api;

  dispatch(request(action));

  return fetchTodo()
    .then(response => dispatch(received(action, response.data)));
};
