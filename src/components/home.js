import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      route: 'What do you want to learn about?',
      dolphin: '../images/dolphin.png',
      saxophone: '../images/saxophone.png',
      piano: '../images/piano.png'
    }
  }

  componentWillMount(){
    this.props.getMembers();
    this.props.getEvents();
  }

  renderMembers(memberData){

    const userLink = `/profile/${memberData.username}`

    return(
      <Link to={userLink}>
        <li key={memberData.username} className="col-1-3 member">
          <img className="member-thumbnail" src={memberData.profilePic}/>
          <h3 className="member-name">{memberData.name}</h3>
          <p className="member-title">{memberData.title}</p>
        </li>
      </Link>
    )
  }

  renderMembersList(){
    if(this.props.members){
      return(
        <div>
          <img className='page-splash' src='../images/homeSplash.jpg'/>
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

  setRoute(text){
    this.setState({route:text})
  }

  toggleDolphin(){
    if(this.state.dolphin === '../images/dolphin.png'){
      this.setState({dolphin: '../images/dolphinHover.png'})
    }
    else {
      this.setState({dolphin: '../images/dolphin.png'})
    }
  }

  toggleSax(){
    if(this.state.saxophone === '../images/saxophone.png'){
      this.setState({saxophone: '../images/saxophoneHover.png'})
    }
    else {
      this.setState({saxophone: '../images/saxophone.png'})
    }
  }

  togglePiano(){
    if(this.state.piano === '../images/piano.png'){
      this.setState({piano: '../images/pianoHover.png'})
    }
    else {
      this.setState({piano: '../images/piano.png'})
    }
  }

  render(){
      return(
        <div>
          <div className="splash-container">
            <img className='page-splash home-splash' src='../images/singSplash.jpg'/>
            <div className='splash-text'>
              <h3 className="summary-text">Artists helping artists achieve their fullest potential.</h3>
              <Link to="/philosophy" className="solid-black-button">Learn More</Link>
            </div>
          </div>

          <div className='philosophy'>
            <div className="pad-20">
              <h1 className="white">What do you want to achieve?</h1>
              <p className="paragraph">We are an industry-grade recording facility offering our signature analog-digital or “Ana-Digi” recording sound. Artists from home and from across the globe have come to experience what we have to offer. From pre-production to mastering, we provide it all. Come to Area Twenty-Two to see and hear your ideas come to life.</p>
            </div>
          </div>


          <div className="brain-block">
            <div className='brain-container'>
              <img className='brain-splash' src='../images/brainSplash.jpg'/>
              <Link to="/philosophy"><img className='brain-dolphin' src={this.state.dolphin} onMouseOver={this.toggleDolphin.bind(this)} onMouseOut={this.toggleDolphin.bind(this)}/></Link>
              <Link to="/audio"><img className='brain-saxophone' src={this.state.saxophone} onMouseOver={this.toggleSax.bind(this)} onMouseOut={this.toggleSax.bind(this)}/></Link>
              <Link to="/development"><img className='brain-piano' src={this.state.piano} onMouseOver={this.togglePiano.bind(this)} onMouseOut={this.togglePiano.bind(this)}/></Link>
            </div>
          </div>

          <div className="community-callout">
          <h3 className="community-text">We are excited to share that one of our members, Mallory Sabado, just released her album out into the world. Check it out!</h3>
          <div>
            <a className="solid-black-button" href="https://goo.gl/YO1pKw">CD Baby</a>
            <a className="solid-black-button" href="https://goo.gl/ePJCxK">Google Store</a>
          </div>
          </div>

          <div>
            <div className="services-container">
              <div className="col-1-3 service">
              <img className="service-graphic" src='../images/audioProductionIcon.png'/>
              <h3>Audio Production</h3>
              <p className="paragraph">We are an industry-grade recording facility offering our signature analog-digital or “Ana-Digi” recording sound. </p>
              <Link to="/audio" className="black-button">Tour Studio</Link>
              </div>
              <div className="col-1-3 service">
                <img className="service-graphic" src='../images/developmentProductionIcon.png'/>
                <h3>Artist Development</h3>
                <p className="paragraph">Do you have a talent that needs to shine? We are dedicated to developing and promoting artists and all types of art forms.</p>
                <Link to="/development" className="black-button">See Offerings</Link>
              </div>
              <div className="col-1-3 service">
                <img className="service-graphic" src='../images/communityIcon.png'/>
                <h3>Philosophy</h3>
                <p className="paragraph">We are a community of like minded artists working together in order to achieve our collective dreams.</p>
                <Link to="/philosophy" className="black-button">Learn More</Link>
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
