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
        <h3>{memberData.name}</h3>
        <p className="member-title">{memberData.title}</p>
      </li>
    )
  }

  renderMembersList(){
    if(this.props.members){
      return(
        <div>
          <img className='page-splash pad-20' src='../images/homeSplash.jpg'/>
          <ul className="member-list">
            {this.props.members.map(this.renderMembers.bind(this))}
          </ul>
        </div>
      )
    }
  }

  renderEvent(eventData){
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
          <div className="title-container">
            <div className="red-triangle"></div>
            <h1 className="title-text">Events</h1>
          </div>
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
          <div className="splash-container">
            <img className='page-splash home-splash' src='../images/singSplash.jpg'/>
            <div className='splash-text'><h3 className="pad-20 no-margin">Some great summary text about Area Twenty-Two</h3></div>
            </div>
        <div>
          <div className="services-container">
            <div className="col-1-3 service">
              <img className="service-graphic" src='../images/developmentProductionIcon.png'/>
              <h3>Artist Development</h3>
              <p className="paragraph">Do you have a talent that needs to shine? We help you realize your musical dreams from the bottom up. </p>
              <Link to="/development" className="black-button">See Classes</Link>
            </div>
            <div className="col-1-3 service">
              <img className="service-graphic" src='../images/audioProductionIcon.png'/>
              <h3>Audio Production</h3>
              <p className="paragraph">We are an industry-grade recording facility offering our signature analog-digital or “Ana-Digi” recording sound. </p>
              <Link to="/audio" className="black-button">Tour Studio</Link>
            </div>
            <div className="col-1-3 service">
              <img className="service-graphic" src='../images/communityIcon.png'/>
              <h3>Community</h3>
              <p className="paragraph">We are a community of like minded artists working together to achieve our collective dreams.</p>
              <Link to="/audio" className="black-button">Meet Community</Link>
            </div>
          </div>
          <div className='philosophy'>
            <div className='col-3-4 philosophy'>
              <div className="pad-20">
                <h1 className="white">Our Philosophy</h1>
                <p className="paragraph">We are a group of artists who communicate our passions through music, dance, production, visual arts and writing. We believe that all individuals possess great creative potential in which some have not fully realized because of imposed limitations or fear. Through our endeavors we strive to inspire others to seek out the creativity that exists within them.</p>
              </div>
            </div>
            <div className='brain-container col-1-4'>
            <img className='brain-splash' src='../images/brainSplash.jpg'/>
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
