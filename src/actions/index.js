import axios from 'axios';
import {browserHistory} from 'react-router';
import {EMAIL_ERROR, MEMBER_ERROR, SET_MEMBER, GET_MEMBERS} from './types';

if(process.env.NODE_ENV == 'production'){
  console.log('Were in production!')
  const ROOT_URL = '';
}
else{
  const ROOT_URL = 'http://localhost:3090';
}

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
