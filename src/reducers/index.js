import { combineReducers } from 'redux';
import TestReducer from './TestReducer';

export default combineReducers({
  auth: TestReducer
});
