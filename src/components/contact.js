import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';

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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
          <textarea {...message} className="form-control"/>
          {message.touched && message.error && <div className="error">{message.error}</div>}
        </fieldset>
        <button action="submit" className="btn">Submit</button>
      </form>
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
