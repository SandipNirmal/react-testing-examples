import { USERS } from './actioTypes';

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
