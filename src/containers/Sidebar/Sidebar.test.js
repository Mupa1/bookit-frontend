import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Sidebar from './Sidebar';
import store from '../../Redux/store';

describe('Sidebar', () => {
  it('renders Sidebar component correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('BookIT')).toBeInTheDocument();
  });

  it('matches Sidebar snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Sidebar />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
