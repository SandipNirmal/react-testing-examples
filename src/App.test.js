import React from 'react';

import { renderWithProviders } from './testUtils/utils';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = renderWithProviders(<App />);
  const linkElement = getByText(/User list/i);
  expect(linkElement).toBeInTheDocument();
});
