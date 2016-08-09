import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';
import GoogleMapComponent from './blocks/google_map';


class Contact extends Component {

  handleFormSubmit({email, confirmEmail, message}){
    console.log('Email: ', email);
    console.log('Confirm Email: ', confirmEmail);
    console.log('Message: ', message);

    this.props.emailForm({email, confirmEmail, message});

  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render(){

    const {handleSubmit, fields: {email, confirmEmail, message}} = this.props;

    return(
      <div>
        <div className="map-container">
          <GoogleMapComponent/>
        </div>
        <h3 className="red center-me">Contact Us</h3>
        <div className="contact-container">
          <div><h3 className="contact-title">Address:</h3><p className="contact-text">2277 State Rd, Plymouth, MA 02360</p></div>
          <div><h3 className="contact-title">Email:</h3><p className="contact-text">info@areatwenty-two.com</p></div>
          <div><h3 className="contact-title">Phone:</h3><p className="contact-text">(508) 333-2953 (ask for Mal)</p></div>
        </div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="pad-20">
          <fieldset className="form-group">
            <label>Email:</label>
            <input type="email" {...email} className="form-control"/>
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Email:</label>
            <input type="email" {...confirmEmail} className="form-control"/>
            {confirmEmail.touched && confirmEmail.error && <div className="error">{confirmEmail.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Message:</label>
            <textarea {...message} className="form-control" placeholder="Drag the bottom right corner of this box down for more space."/>
            {message.touched && message.error && <div className="error">{message.error}</div>}
          </fieldset>
          <button action="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.email){
    errors.email = 'Please enter an email address';
  }

  if(!formProps.confirmEmail){
    errors.confirmEmail = 'Please confirm your email';
  }

  if(formProps.email !== formProps.confirmEmail){
    errors.confirmEmail = 'Emails must match';
  }

  if(!formProps.message){
    errors.message = 'Please enter a message';
  }

  return errors;
}

function mapStateToProps(state){
  return {errorMessage: state.error}
}

export default reduxForm({
  form: 'contact',
  fields: ['email', 'confirmEmail', 'message'],
  validate: validate
}, mapStateToProps, actions)(Contact);
