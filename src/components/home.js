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
        <img className='page-splash pad-20' src='../images/homeSplash.jpg'/>
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
          <img className='page-splash home-splash' src='../images/singSplash.jpg'/>
          <div>
            <div className='brain-container col-1-2'>
              <img className='brain-splash' src='../images/brainSplash.jpg'/>
            </div>
            <div className='col-1-2'>
              <div className="pad-20">
                <p className="paragraph">We are a group of artists who communicate our passions through music, dance, production, visual arts and writing. We believe that all individuals possess great creative potential in which some have not fully realized because of imposed limitations or fear. Through our endeavors we strive to inspire others to seek out the creativity that exists within them.</p>
              </div>
            </div>
            <div>
              <h1 className="red-header">What We Do</h1>
              <div className="col-1-2 pad-20">
                <h3>Artist Development</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla at velit sagittis imperdiet non gravida urna. Morbi convallis mollis risus sit amet pharetra. Praesent porta neque vel ex cursus, quis finibus nibh pellentesque. Nam sit amet odio id orci luctus ultricies quis a odio. Fusce condimentum non orci sit amet bibendum. Maecenas aliquam tortor ut lorem pellentesque, at feugiat turpis pretium.</p>
                <Link to="/development" className="black-button">See Classes</Link>
              </div>
              <div className="col-1-2">
                <img className="page-splash" src="/images/artistDevelopment.jpg"/>
              </div>
              <div className="col-1-2">
              <img className="page-splash" src="/images/audioProduction.jpg"/>
              </div>
              <div className="col-1-2 pad-20">
                <h3>Audio Production</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla at velit sagittis imperdiet non gravida urna. Morbi convallis mollis risus sit amet pharetra. Praesent porta neque vel ex cursus, quis finibus nibh pellentesque. Nam sit amet odio id orci luctus ultricies quis a odio. Fusce condimentum non orci sit amet bibendum. Maecenas aliquam tortor ut lorem pellentesque, at feugiat turpis pretium.</p>
                <Link to="/audio" className="black-button">Tour Studio</Link>
              </div>

            </div>
          </div>
          {this.renderMembersList()}
        </div>
      );
  }
}

function mapStateToProps(state){
  return {members: state.members.all,
          events: state.events.all};
}

export default connect(mapStateToProps, actions)(Home);
