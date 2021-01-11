import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('renders SignIn component with a title', () => {
    render(
      <Router>
        <SignIn />
      </Router>,
    );
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('should have a Sign In form', () => {
    const { queryAllByTestId } = render(
      <Router>
        <SignIn />
      </Router>,
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
