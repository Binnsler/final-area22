import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';

class NewMember extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: '',
      authenticated: false,
      data_uri: null
    };

  }

  onAuthenticateSubmit(event){
    event.preventDefault();

    if(this.state.term == 'secretpassword'){
      this.setState({term: '', authenticated: true})
    }
  }

  handleFormSubmit({username, name, description, email}){

    const profileData = {
      username: username,
      name: name,
      description: description,
      email: email,
      profilePic: this.state.data_uri
    };

    console.log(profileData)
    this.props.createProfile(profileData);

  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }


  handleFile(event){

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      })
    }
    reader.readAsDataURL(file);
  }

  authenticate(){
    if(!this.state.authenticated){
      return(
        <form onSubmit={this.onAuthenticateSubmit.bind(this)}>
        <fieldset className="form-group">
        <label>Password:</label>
        <input onChange={this.onInputChange.bind(this)} type="password" className="form-control"/>
        </fieldset>
        <button type="submit">Submit</button>
        </form>
      );
    }
  }

  newMember(){

    let preview;

    if (this.state.data_uri) {
      preview = (
        <div>
          <h4>Preview:</h4>
          <img className='image-preview' src={this.state.data_uri} />
        </div>
      );
    }

    if(this.state.authenticated){

      const {handleSubmit, fields: {username, name, description, email}} = this.props;

      return(
        <div>
          <h3>Create a New Member</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Profile Username(no spaces):</label>
              <input placeholder="ex. bobyen" {...username} className="form-control"/>
              {username.touched && username.error && <div className="error">{username.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Member Name:</label>
              <input placeholder="ex. Bob Yen" {...name} className="form-control"/>
              {name.touched && name.error && <div className="error">{name.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Member Description:</label>
              <textarea {...description} className="form-control"/>
              {description.touched && description.error && <div className="error">{description.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Email:</label>
              <input placeholder="ex. bobyen@areatwenty-two.com" {...email} className="form-control"/>
              {email.touched && email.error && <div className="error">{email.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Profile Picture:</label>
              <input type="file" className="form-control" onChange={this.handleFile.bind(this)}/>
            </fieldset>
            {preview}
            <button className="btn">Submit</button>
          </form>
        </div>
      )
    }
  }

  render(){
      return(
        <div>
        {this.authenticate()}
        {this.newMember()}
        </div>
      );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.username){
    errors.username = 'Please enter a username (this will be used as /profile/username)';
  }

  if(!formProps.name){
    errors.name = 'Please enter a full name';
  }

  if(!formProps.description){
    errors.description = 'Please enter a description';
  }

  if(!formProps.email){
    errors.email = 'Please enter an email';
  }

  return errors;
}

export default reduxForm({
  form: 'member',
  fields: ['username', 'name', 'description', 'email'],
  validate: validate
}, null, actions)(NewMember);
