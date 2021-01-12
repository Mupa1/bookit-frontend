import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default App;
