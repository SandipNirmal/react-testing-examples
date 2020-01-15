import { USERS } from './actionTypes';

export const getUsers = () => {
  return {
    type: USERS.GET
  };
};

export const setUsers = payload => {
  return {
    type: USERS.SET,
    payload
  };
};

export const setError = payload => {
  return {
    type: USERS.SET_ERROR,
    payload
  };
};
