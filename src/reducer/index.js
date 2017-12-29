import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert, routing: routerReducer
});

export default rootReducer;