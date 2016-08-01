import {EVENT_ERROR, GET_EVENTS, SET_EVENT} from '../actions/types';

export default function(state = {eventData: {}}, action){
  switch(action.type){
    case EVENT_ERROR:
      console.log('Reducing an event error');

    case GET_EVENTS:
      return {...state, all: action.payload}

    case SET_EVENT:
      return {...state, eventData: action.payload}
  }

  return state;
}
