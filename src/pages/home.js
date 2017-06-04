import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as actions from "../actions";

import HomeSplash from "../components/Home/home-splash.js";
import HomeSummary from "../components/Home/home-summary.js";
import BrainBlock from "../components/Home/brain-block.js";
import CommunityCallout from "../components/Home/community-callout.js";
import ServiceBlock from "../components/Home/service-block.js";

class Home extends Component {
  constructor( props ){
    super( props );

    this.state = {
      "route": "What do you want to learn about?",
      "dolphin": "../images/dolphin.png",
      "saxophone": "../images/saxophone.png",
      "piano": "../images/piano.png",
      "successful": false
    }
  }

  componentWillMount(){
    this.props.getMembers();
    this.props.getEvents();
  }

  renderMembers( memberData ){
    const userLink = `/profile/${ memberData.username }`

    return(
      <Link to={userLink}>
        <li key={ memberData.username } className="col-1-3 member">
          <img className="member-thumbnail" src={ memberData.profilePic }/>
          <h3 className="member-name">{ memberData.name }</h3>
          <p className="member-title">{ memberData.title }</p>
        </li>
      </Link>
    )
  }

  renderMembersList(){
    if( this.props.members ){
      return(
        <div>
          <img className="page-splash" src="../images/homeSplash.jpg"/>
          <ul className="member-list">
            { this.props.members.map( this.renderMembers.bind( this ) ) }
          </ul>
        </div>
      )
    }
  }

  renderEvent(eventData){
    return(
      <li key={ eventData.name } className="col-1-2 event">
        <div className="width-50 align-top">
          <img className="event-thumbnail" src={ eventData.profilePic }/>
        </div>
        <div className="width-50 align-top">
          <h4>{ eventData.name }</h4>
          <p>{ eventData.date }</p>
          <p>{ eventData.time }</p>
          <p>{ eventData.description }</p>
        </div>
      </li>
    )
  }

  renderServices(){
      const services = [
          { "img": "../images/audioProductionIcon.png",
            "title": "Audio Production",
            "text": "We are an industry-grade production facility offering our signature analog-digital or “Ana-Digi” recording sound.",
            "buttons": [
                { "route": "/audio", "text": "Tour Studio" }
            ]
          },
          { "img": "../images/developmentProductionIcon.png",
            "title": "Artist Development",
            "text": "Do you have a talent that needs to shine? We are dedicated to developing and promoting artists and all types of art forms.",
            "buttons": [
                { "route": "/development", "text": "See Offerings" }
            ]
          },
          { "img": "../images/communityIcon.png",
            "title": "Philosophy",
            "text": "We are a community of like minded artists working together in order to achieve our collective dreams.",
            "buttons": [
                { "route": "/philosophy", "text": "Learn More" }
            ]
          }
      ];

      return (
          <div className="services-container">
            { services.map( ( service, i ) => (
                <ServiceBlock key={ i } service={ service }/>
            ) ) }
          </div>
      )

  }

  setRoute( text ){
    this.setState( { "route": text } );
  }

  toggleDolphin(){
    if( this.state.dolphin === "../images/dolphin.png" ){
      this.setState( { "dolphin": "../images/dolphinHover.png" } );
    }
    else {
      this.setState( { "dolphin": "../images/dolphin.png" } );
    }
  }

  toggleSax(){
    if( this.state.saxophone === "../images/saxophone.png" ){
      this.setState( { "saxophone": "../images/saxophoneHover.png" } );
    }
    else {
      this.setState( { "saxophone": "../images/saxophone.png" } );
    }
  }

  togglePiano(){
    if( this.state.piano === "../images/piano.png" ){
      this.setState( { "piano": "../images/pianoHover.png" } );
    }
    else {
      this.setState( { "piano": "../images/piano.png" } );
    }
  }

  render(){
      return(
        <div>
          <HomeSplash />
          <HomeSummary />
          <BrainBlock
            piano={ this.state.piano }
            togglePiano={ this.togglePiano.bind( this ) }
            saxophone={ this.state.saxophone }
            toggleSax={ this.toggleSax.bind( this ) }
            dolphin={ this.state.dolphin }
            toggleDolphin={ this.toggleDolphin.bind( this ) }
          />

          <CommunityCallout
            text={ "We are excited to share that one of our members, Mallory Sabado, released her first solo album out into the world. Check it out!" }
            buttons={ [
                { "url": "https://goo.gl/YO1pKw", "text": "CD Baby" },
                { "url": "https://goo.gl/ePJCxK", "text": "GoogleStore" }
            ] }
          />
          <CommunityCallout
            text={ "Check out the first recording and music video by our student Marisa!" }
            buttons={ [
                { "url": "https://www.youtube.com/watch?v=Pd7BkDGHy6g", "text": "View Video" }
            ] }
            color="#47b7a5"
          />

          { this.renderServices() }
          { this.renderMembersList() }
        </div>
      );
  }
}

function mapStateToProps( state ){
  return { members: state.members.all,
          events: state.events.all };
}

export default connect( mapStateToProps, actions )( Home );
