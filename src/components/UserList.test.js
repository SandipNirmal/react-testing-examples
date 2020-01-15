import React from 'react';
import { cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';

import { renderWithProviders } from '../testUtils/utils';
import UserList from './UserList';

afterEach(cleanup);
const response = {
  data: [
    {
      id: 1,
      name: 'Chuck Norris',
      username: 'chuck',
      email: 'chuck@test.com'
    }
  ]
};

const url = 'https://jsonplaceholder.typicode.com/users';

it('renders component', async () => {
  jest.spyOn(axios, 'get').mockImplementationOnce(() => {
    return Promise.resolve(response);
  });

  const { getByText, getByTestId } = renderWithProviders(<UserList />);

  expect(getByText('Loading...')).toBeInTheDocument();
  expect(getByText('No Users Available')).toBeInTheDocument();

  const user = await waitForElement(() => getByTestId('user-1'));

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
  expect(user).toHaveTextContent('Chuck Norris');
});

it('shows error for failed request', async () => {
  jest.spyOn(axios, 'get').mockImplementationOnce(() => {
    return Promise.reject(new Error('Failed to load users'));
  });

  const { getByText, getByTestId } = renderWithProviders(<UserList />);

  expect(getByText('Loading...')).toBeInTheDocument();

  const error = await waitForElement(() => getByTestId('userlist-error'));

  expect(axios.get).toHaveBeenCalledWith(url);
  expect(error).toHaveTextContent('Failed to load users');
});

it('shows default error for failed request', async () => {
  jest.spyOn(axios, 'get').mockImplementationOnce(() => {
    return Promise.reject(new Error());
  });

  const { getByTestId } = renderWithProviders(<UserList />);
  const error = await waitForElement(() => getByTestId('userlist-error'));

  expect(axios.get).toHaveBeenCalledWith(url);
  expect(error).toHaveTextContent('Error fetching users!');
});
