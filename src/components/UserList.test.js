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
