import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Action to handle errors
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const ADD_USER_ERROR = 'ADD_USER_ERROR';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export const fetchUsers = () => async dispatch => {
  try {
    const response = await axios.get(API_URL);
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_ERROR,
      payload: error.message
    });
  }
};

export const addUser = (user) => async dispatch => {
  try {
    const response = await axios.post(API_URL, user);
    dispatch({
      type: ADD_USER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_ERROR,
      payload: error.message
    });
  }
};

export const updateUser = (user) => async dispatch => {
  try {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({
      type: UPDATE_USER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: error.message
    });
  }
};

export const deleteUser = (id) => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_ERROR,
      payload: error.message
    });
  }
};
