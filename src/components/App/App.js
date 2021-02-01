import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import Doctors from '../../containers/Doctors/Doctors';
import DoctorDetails from '../../containers/DoctorDetails/DoctorDetails';
import Appointments from '../../containers/Appointments/Appointments';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/doctors" component={Doctors} />
      <Route exact path="/doctors/:doctor_id" component={DoctorDetails} />
      <Route path="/appointments" component={Appointments} />
    </Switch>
  </BrowserRouter>
);

export default App;
