import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage component with a message', () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );
    expect(screen.getByText('BookIT')).toBeInTheDocument();
  });

  it('matches Homepage snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <HomePage />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
