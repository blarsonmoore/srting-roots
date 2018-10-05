import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import instrumentReducer from './instrumentReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  profile: profileReducer,
  instrument: instrumentReducer
});
