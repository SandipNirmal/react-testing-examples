import React from 'react';
import { render, cleanup } from '@testing-library/react';

import User from './User';

afterEach(cleanup);

const defaultProps = {
  id: 1,
  name: 'Chuck Norris',
  username: 'chuck',
  email: 'chuck@test.com'
};

it('renders user component', () => {
  const { getByText } = render(<User {...defaultProps} />);

  expect(getByText(defaultProps.name)).toBeInTheDocument();
});
