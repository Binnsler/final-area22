import {EMAIL_ERROR} from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case EMAIL_ERROR:
      console.log('Reducing an email error');
  }

  return state;
}
