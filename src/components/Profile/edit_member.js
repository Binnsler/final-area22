import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class EditProfile extends Component {

  componentWillMount(){
    // Action to get user data from server
    this.props.getProfile(this.props.params.username)
  }

  constructor(props){
    super(props);

    this.state = {
      data_uri: null
    };

  }

  handleFormSubmit({name, title, description, email}){

    const profileData = {
      username: this.props.params.username,
      name: name,
      title: title,
      description: description,
      email: email,
      profilePic: this.state.data_uri
    };

    console.log(profileData)
    this.props.editProfile(profileData);

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

  editMember(){

    let preview;
    let error;

    if (this.state.data_uri) {
      preview = (
        <div>
          <h4>Preview:</h4>
          <img className='image-preview' src={this.state.data_uri} />
        </div>
      );
    }

    if(this.props.errorMessage){
      error = (
        <p className="error">Error: {this.props.errorMessage}</p>
      )
    }

      const {handleSubmit, fields: {name, title, description, email}} = this.props;

      return(
        <div>
          <h3>Edit Member: {this.props.params.username}</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Member Name:</label>
              <input placeholder="ex. Bob Yen" {...name} className="form-control"/>
              {name.touched && name.error && <div className="error">{name.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Member Title:</label>
              <input placeholder="ex. Sound Engineer" {...title} className="form-control"/>
              {title.touched && title.error && <div className="error">{title.error}</div>}
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
            {error}
          </form>
        </div>
      )
  }

  render(){
      return(
        <div>
        {this.editMember()}
        </div>
      );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.name){
    errors.name = 'Please enter a full name';
  }

  if(!formProps.title){
    errors.title = 'Please enter a title';
  }

  if(!formProps.description){
    errors.description = 'Please enter a description';
  }

  if(!formProps.email){
    errors.email = 'Please enter an email';
  }

  return errors;
}

function mapStateToProps(state){
  return {initialValues: state.members.memberData,
          errorMessage: state.members.error}
}

export default reduxForm({
  form: 'member',
  fields: ['name', 'title', 'description', 'email'],
  validate: validate
}, mapStateToProps, actions)(EditProfile);
