// Firebase Database
import database from '../shared/firebase/database';

// Action Types
import {
  FETCH_PHRASE_REQUEST,
  FETCH_PHRASE_SUCCESS,
  ADD_PHRASE_REQUEST,
  DELETE_PHRASE_REQUEST,
  DELETE_PHRASE_SUCCESS,
  UPDATE_PHRASE_REQUEST,
  UPDATE_PHRASE_SUCCESS,
  UPDATE_PHRASE_ERROR
} from './actionTypes';

// Base Actions
import { request, received } from '../shared/redux/baseActions';

export const fetchPhrases = () => dispatch => {
  // Dispatching our FETCH_PHRASE_REQUEST action
  dispatch(request(FETCH_PHRASE_REQUEST));

  // Listening for added rows
  database.on('child_added', snapshot => {
    dispatch(received(FETCH_PHRASE_SUCCESS, { key: snapshot.key, ...snapshot.val() }));
  });

  // Listening for updated rows
  database.on('child_changed', snapshot => {
    dispatch(received(UPDATE_PHRASE_SUCCESS, { key: snapshot.key, ...snapshot.val() }));
  });

  // Lisetining for removed rows
  database.on('child_removed', snapshot => {
    dispatch(received(DELETE_PHRASE_SUCCESS, { key: snapshot.key }));
  });
};

export const addPhrase = (phrase, author) => dispatch => {
  // Dispatching our ADD_PHRASE_REQUEST action
  dispatch(request(ADD_PHRASE_REQUEST));

  // Adding a new element by pushing to the ref.
  // NOTE: Once this is executed the listener will be on fetchPhrases (child_added)
  database.push({
    phrase,
    author
  });
}

export const deletePhrase = key => dispatch => {
  // Dispatching our DELETE_PHRASE_REQUEST action
  dispatch(request(DELETE_PHRASE_REQUEST));

  // Removing element by key
  // NOTE: Once this is executed the listener will be on fetchPhrases (child_removed)
  database.child(key).remove();
}

export const updatePhrase = (key, phrase, author) => dispatch => {
  // Dispatching our UPDATE_PHRASE_REQUEST action
  dispatch(request(UPDATE_PHRASE_REQUEST));

  // Collecting our data...
  const data = {
    phrase,
    author
  };

  // Updating an element by key and data
  database
    .child(key) // First we select our element by key
    .update(data) // Updating the data in this point
    .then(() => database.once('value')) // Returning the updated data
    .then(snapshot => snapshot.val()) // Getting the actual values of the snapshat
    .catch(error => {
      // If there is an error we dispatch our error action
      dispatch(request(UPDATE_PHRASE_ERROR));

      return {
        errorCode: error.code,
        errorMessage: error.message
      };
    });
};
