import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Home extends Component {

  componentWillMount(){
    this.props.getMembers();
    this.props.getEvents();
  }

  renderMembers(memberData){

    const userLink = `/profile/${memberData.username}`

    return(
      <li key={memberData.username} className="col-1-3 member">
        <Link to={userLink}><img className="member-thumbnail" src={memberData.profilePic}/></Link>
        <h4>{memberData.name}</h4>
        <p className="member-title">{memberData.title}</p>
      </li>
    )
  }

  renderMembersList(){
    if(this.props.members){
      return(
        <div>
        <h1 className="red-header">Staff</h1>
        <ul className="member-list">
          {this.props.members.map(this.renderMembers.bind(this))}
        </ul>
        </div>
      )
    }
  }

  renderEvent(eventData){
    console.log('rendering event')
    return(
      <li key={eventData.name} className="col-1-2 event">
        <div className="width-50 align-top">
          <img className="event-thumbnail" src={eventData.profilePic}/>
        </div>
        <div className="width-50 align-top">
          <h4>{eventData.name}</h4>
          <p>{eventData.date}</p>
          <p>{eventData.time}</p>
          <p>{eventData.description}</p>
        </div>
      </li>
    )
  }

  renderEventList(){
    if(this.props.events){
      return(
        <div>
          <h1 className="red-header bottom-20">Events</h1>
          <ul className="event-list">
            {this.props.events.map(this.renderEvent.bind(this))}
          </ul>
        </div>
      )
    }
  }

  render(){
      return(
        <div>
          <img className='page-splash home-splash' src='../images/homeSplash.jpg'/>
          <div>
            <div className='brain-container col-1-2'>
              <img className='brain-splash' src='../images/brainSplash.jpg'/>
            </div>
            <div className='col-1-2'>
              <div className="pad-20">
                <h2>Area Twenty-Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi orci, molestie ac erat eu, lobortis vulputate mauris. Nam sed arcu ac massa feugiat accumsan at sit amet sapien. Sed ut nisi non est porta vehicula tristique ac mauris. Nam imperdiet ligula ac aliquet ornare. Morbi sollicitudin, augue a sodales auctor, odio ante fringilla velit, efficitur elementum orci ex et erat. Integer aliquam volutpat dapibus.\</p>
              </div>
            </div>
          </div>
          {this.renderMembersList()}
          {this.renderEventList()}
        </div>
      );
  }
}

function mapStateToProps(state){
  return {members: state.members.all,
          events: state.events.all};
}

export default connect(mapStateToProps, actions)(Home);
