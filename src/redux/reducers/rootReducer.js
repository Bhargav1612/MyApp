// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import internshipReducer from './internshipReducer';
import jobReducer from './jobReducer';
import applicationReducer from './applicationReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  internships: internshipReducer,
  jobs: jobReducer,
  applications: applicationReducer,
  profile: profileReducer,
});

export default rootReducer;
