import axios from 'axios';
import {browserHistory} from 'react-router';
import {EMAIL_ERROR, MEMBER_ERROR, SET_MEMBER, GET_MEMBERS, GET_EVENTS, SET_EVENT, EVENT_ERROR, CLEAR_USER} from './types';

// Development
 // var ROOT_URL = 'http://localhost:3090';
// Production
var ROOT_URL = '';


// Pull in data from /contact form and send off to Sendgrid API
export function emailForm({email, confirmEmail, message}){
  return function(dispatch){


    axios.post(`${ROOT_URL}/email`, {email, confirmEmail, message})
      .then(response => {
        console.log('Server response:')
        console.log(response)
      })
      .catch((error) => {
        console.log('Error from the server:')
        console.log(error.response)

        // Dispatch email error
        dispatch({
          type: EMAIL_ERROR,
          payload: error.response.data
        })
      })
  }
}

// Collect profileData from /new-member and create new member through Node
export function createProfile(profileData){
  return function(dispatch){

  axios.post(`${ROOT_URL}/api/new-member`, profileData)
    .then(response => {

      const memberUsername = response.data.username;

      browserHistory.push(`/profile/${memberUsername}`)
    })
    .catch((error) => {

      // Dispatch member error
      dispatch({
        type: MEMBER_ERROR,
        payload: error.response.data
      })
    })
  }
}

// Collect profileData from /edit/:username and edit member through Node
export function editProfile(profileData){
  return function(dispatch){

  axios.post(`${ROOT_URL}/api/edit-member`, profileData)
    .then(response => {

      const memberUsername = response.data.username;

      browserHistory.push(`/profile/${memberUsername}`)
    })
    .catch((error) => {

      // Dispatch member error
      dispatch({
        type: MEMBER_ERROR,
        payload: error.response.data
      })
    })
  }
}

// Get profile data from the server
export function getProfile(username){
  return function(dispatch){

    axios.get(`${ROOT_URL}/api/getMember?username=${username}`)
      .then(response => {
        dispatch({
          type: SET_MEMBER,
          payload: response.data
        })
      })
      .catch((error) => {

        if(error.response.status === 404){
          browserHistory.push('/oops')
        }
      })
  }
}

// Get all profiles from the server
export function getMembers(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/allMembers`)
      .then(response => {
        dispatch({
          type: GET_MEMBERS,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error from the server:')
        console.log(error.response)
      })
  }
}

// Delete Member
export function deleteMember(username){
  return function(dispatch){
    axios.delete(`${ROOT_URL}/api/deleteMember?username=${username}`)
      .then(response => {

        dispatch({
          type: GET_MEMBERS,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error from server:')
        console.log(error.response)
      })
  }
}

// Collect eventData from /new-event and create new event through Node
export function createEvent(eventData){
  return function(dispatch){

  axios.post(`${ROOT_URL}/api/new-event`, eventData)
    .then(response => {
      console.log(response)
      browserHistory.push('/')
    })
    .catch((error) => {

      // Dispatch member error
      dispatch({
        type: EVENT_ERROR,
        payload: error.response.data
      })
    })
  }
}

// Get all profiles from the server
export function getEvents(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/allEvents`)
      .then(response => {
        dispatch({
          type: GET_EVENTS,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error from the server:')
        console.log(error.response)
      })
  }
}

// Delete Event
export function deleteEvent(_id){
  return function(dispatch){
    axios.delete(`${ROOT_URL}/api/deleteEvent?id=${_id}`)
      .then(response => {
        dispatch({
          type: GET_EVENTS,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error from server:')
        console.log(error.response)
      })
  }
}

// Get profile data from the server
export function getEvent(id){
  return function(dispatch){

    axios.get(`${ROOT_URL}/api/getEvent?id=${id}`)
      .then(response => {
        dispatch({
          type: SET_EVENT,
          payload: response.data
        })
      })
      .catch((error) => {

        if(error.response.status === 404){
          browserHistory.push('/oops')
        }
      })
  }
}

// Collect eventData from /edit-event/:id and edit event through Node
export function editEvent(eventData){
  return function(dispatch){

  axios.post(`${ROOT_URL}/api/edit-event`, eventData)
    .then(response => {

      browserHistory.push('/')
    })
    .catch((error) => {

      // Dispatch member error
      dispatch({
        type: EVENT_ERROR,
        payload: error.response.data
      })
    })
  }
}

// Clear member data from state
export function clearUserState(){
  return function(dispatch){
      dispatch({
        type: CLEAR_USER
      })
  }
}
