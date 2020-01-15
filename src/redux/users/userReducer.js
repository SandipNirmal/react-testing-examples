import { USERS } from './actionTypes';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

export function userReducer(state = initialState, action) {
  const { type, payload } = action;

  // console.log(type, payload);

  switch (type) {
    case USERS.GET:
      return {
        ...state,
        loading: true
      };

    case USERS.SET:
      return {
        loading: false,
        error: '',
        users: payload
      };

    case USERS.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload || 'Error fetching users!'
      };

    default:
      return state;
  }
}
