import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SignUp from './SignIn';
import store from '../../Redux/store';

describe('SignUp', () => {
  it('renders SignUp component with a title', () => {
    const div = document.createElement('div');
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <Route path="/SignUp" component={SignUp} />
        </Router>
      </Provider>, div,
    );
    const title = queryAllByTestId('title');
    expect(title).toBeTruthy();
  });

  it('should have a Sign In form', () => {
    const div = document.createElement('div');
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <Route path="/SignUp" component={SignUp} />
        </Router>
      </Provider>, div,
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
