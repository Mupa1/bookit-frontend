import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage component with a message', () => {
    render(<HomePage />);
    expect(screen.getByText('BOOK AN APPOINTMENT')).toBeInTheDocument();
  });
});
