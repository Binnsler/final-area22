import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class EditEvent extends Component {
  componentWillMount(){
    this.props.getEvent(this.props.params.id)
  }

  constructor(props){
    super(props);

    this.state = {
      data_uri: null
    };
  }

  handleFormSubmit({name, date, time, description}){

    const eventData = {
      _id: this.props.params.id,
      name: name,
      date: date,
      time: time,
      description: description,
      profilePic: this.state.data_uri
    };


    this.props.editEvent(eventData);

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

  editEvent(){

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

      const {handleSubmit, fields: {name, date, time, description}} = this.props;

      return(
        <div>
          <h3>Edit Event</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Member Name:</label>
              <input placeholder="ex. Bob Yen" {...name} className="form-control"/>
              {name.touched && name.error && <div className="error">{name.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Member Date:</label>
              <input placeholder="ex. Sound Engineer" {...date} className="form-control"/>
              {date.touched && date.error && <div className="error">{date.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Member Time:</label>
              <input placeholder="ex. Sound Engineer" {...time} className="form-control"/>
              {time.touched && time.error && <div className="error">{time.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Event Description:</label>
              <textarea {...description} className="form-control"/>
              {description.touched && description.error && <div className="error">{description.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>Event Picture:</label>
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
        <div className="pad-20">
        {this.editEvent()}
        </div>
      );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.name){
    errors.name = 'Please enter an event name';
  }

  if(!formProps.date){
    errors.date = 'Please enter a date';
  }

  if(!formProps.time){
    errors.time = 'Please enter an event time';
  }

  if(!formProps.description){
    errors.description = 'Please enter a description';
  }


  return errors;
}

function mapStateToProps(state){
  return {initialValues: state.events.eventData,
          errorMessage: state.events.error}
}

export default reduxForm({
  form: 'event',
  fields: ['name', 'date', 'time', 'description'],
  validate: validate
}, mapStateToProps, actions)(EditEvent);
