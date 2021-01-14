import { combineReducers } from 'redux';

import authReducer from './auth';
import doctorsReducer from './doctors';

const rootReducer = combineReducers({
  user: authReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
