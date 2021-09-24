import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  DELETE_USER,
} from '../actions/userTypes';

const initialstate = {
  loading: false,
  users: [],
  error: '',
};

export const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    case DELETE_USER:
      return {
        loading: false,
        users: state.users.filter((users) => users.id !== action.payload),
      };

    default:
      return state;
  }
};
