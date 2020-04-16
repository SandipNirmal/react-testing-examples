import axios from 'axios';

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const getPostsByUserId = (userId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
};
