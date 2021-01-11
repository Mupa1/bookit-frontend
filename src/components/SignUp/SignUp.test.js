import React from 'react';
import { render, screen } from '@testing-library/react';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders SignUp component with a title', () => {
    render(<SignUp />);
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('should have a registration form', () => {
    const { queryAllByTestId } = render(
      <SignUp />,
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
