import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux';

export const renderWithProviders = Component =>
  render(<ReduxProvider store={store}>{Component}</ReduxProvider>);
