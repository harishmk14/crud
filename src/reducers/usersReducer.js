import { FETCH_USERS_SUCCESS, ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS_ERROR, ADD_USER_ERROR, UPDATE_USER_ERROR, DELETE_USER_ERROR } from '../actions/userActions';

const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        error: null,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        error: null,
      };
    case FETCH_USERS_ERROR:
    case ADD_USER_ERROR:
    case UPDATE_USER_ERROR:
    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
