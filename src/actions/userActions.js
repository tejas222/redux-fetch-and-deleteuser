import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  DELETE_USER,
} from '../actions/userTypes';

import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest()); //set loading to true
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users)); //store data in users state
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message)); // for error message
      });
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
