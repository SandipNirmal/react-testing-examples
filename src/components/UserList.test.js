import React from 'react';
import { render, cleanup } from '@testing-library/react';

import UserList from './UserList';

afterEach(cleanup);

const defaultProps = {
  users: [
    {
      id: 1,
      name: 'Chuck Norris',
      username: 'chuck',
      email: 'chuck@test.com'
    }
  ],
  loading: false,
  error: ''
};

it('renders user component', () => {
  const { getByText } = render(<UserList {...defaultProps} />);

  expect(getByText(defaultProps.users[0].name)).toBeInTheDocument();
});

it('render loading text', () => {
  const { getByText } = render(
    <UserList {...{ ...defaultProps, users: [], loading: true }} />
  );

  expect(getByText('Loading...')).toBeInTheDocument();
});

it('render error text', () => {
  const { getByText } = render(
    <UserList
      {...{ ...defaultProps, users: [], error: 'Error getting users' }}
    />
  );

  expect(getByText('Error getting users')).toBeInTheDocument();
  expect(getByText('No Users Available')).toBeInTheDocument();
});
