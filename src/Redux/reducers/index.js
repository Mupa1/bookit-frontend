import { combineReducers } from 'redux';

import authReducer from './auth';
import doctorsReducer from './doctors';
import appointmentReducer from './appointment';

const rootReducer = combineReducers({
  user: authReducer,
  doctors: doctorsReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
