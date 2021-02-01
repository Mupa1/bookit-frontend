import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Doctors from './Doctors';
import store from '../../Redux/store';

describe('Doctors', () => {
  it('renders Doctors component with a message', () => {
    render(
      <Provider store={store}>
        <Router>
          <Doctors />
        </Router>
      </Provider>,
    );
  });

  it('matches Doctors snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Doctors />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
