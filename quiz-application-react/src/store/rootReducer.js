import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import questionReducer from './questions/questionReducer';
import userTestReducer from './userTest/userTestReducer';

export default combineReducers({
  users: userReducer,
  questions: questionReducer,
  userTests: userTestReducer
});
