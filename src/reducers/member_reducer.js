import {MEMBER_ERROR, SET_MEMBER, GET_MEMBERS, CLEAR_USER} from '../actions/types';

export default function(state = {memberData: {}}, action){
  switch(action.type){
    case MEMBER_ERROR:
      return {...state, error: action.payload}

    case SET_MEMBER:
      return {...state, memberData: action.payload}

    case GET_MEMBERS:
      return {...state, all: action.payload}

    case CLEAR_USER:
      return {...state, memberData: {}}
  }

  return state;
}
