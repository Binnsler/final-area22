import {MEMBER_ERROR, SET_MEMBER, GET_MEMBERS} from '../actions/types';

export default function(state = {memberData: {}}, action){
  switch(action.type){
    case MEMBER_ERROR:
      console.log('Reducing a member error');

    case SET_MEMBER:
      console.log('Setting member');
      return {...state, memberData: action.payload}

    case GET_MEMBERS:
      console.log('Getting all members')
      return {...state, all: action.payload}
  }

  return state;
}
