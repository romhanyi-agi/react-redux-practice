import { combineReducers } from 'redux';
import counterReducer from './counter.js';
import loggedReducer from './isLogged.js';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
