import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import questionReducer from './questions/questionReducer';

export default combineReducers({
  users: userReducer,
  questions: questionReducer,
});
