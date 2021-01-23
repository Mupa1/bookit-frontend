import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Appointments from './Appointments';
import store from '../../Redux/store';

describe('Appointments', () => {
  it('renders Appointments component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Appointments />
        </Router>
      </Provider>,
    );
  });

  it('matches Appointments snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Appointments />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
