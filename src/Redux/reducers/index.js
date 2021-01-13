import { combineReducers } from 'redux';

import authReducer from './auth';

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
