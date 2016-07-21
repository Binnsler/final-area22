import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import memberReducer from './member_reducer';
import emailReducer from './email_reducer';

const rootReducer = combineReducers({
  form: form,
  members: memberReducer,
  email: emailReducer
});

export default rootReducer;
