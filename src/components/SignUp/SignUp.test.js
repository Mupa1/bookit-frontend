import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders SignUp component with a title', () => {
    render(
      <Router>
        <SignUp />
      </Router>,
    );
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('should have a registration form', () => {
    const { queryAllByTestId } = render(
      <Router>
        <SignUp />
      </Router>,
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
