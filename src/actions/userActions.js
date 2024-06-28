// src/actions/userActions.js
import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const fetchUsers = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: FETCH_USERS_SUCCESS,
    payload: response.data
  });
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id
  };
};
