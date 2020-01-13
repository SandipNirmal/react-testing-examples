import { USERS } from './actioTypes';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

export function userReducer(state = initialState, action) {
  const { type, payload } = action;

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

    default:
      return state;
  }
}
