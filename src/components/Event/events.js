import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Events extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getEvents();
  }

  onDeleteClick(id){
    this.props.deleteEvent(id);
  }

  renderEvents(eventData){

    let editLink = `/edit-event/${eventData._id}`;

    return(
      <li key={eventData._id}>
        <h4>{eventData.name}</h4>
        <button className="btn btn-danger" onClick={() => {this.onDeleteClick(eventData._id)}}>Delete Event</button>
        <Link className="btn btn-success" to={editLink}>Edit Event</Link>
      </li>
    )
  }

  renderEventsList(){

    if(this.props.events){
      return(
        <ul>
          {this.props.events.map(this.renderEvents.bind(this))}
        </ul>
      )
    }
  }


  render(){
    return(
      <div>
        {this.renderEventsList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {events: state.events.all}
}

export default connect(mapStateToProps, actions)(Events);
