import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as actions from "../actions";

import HomeSplash from "../components/Home/home-splash.js";
import HomeSummary from "../components/Home/home-summary.js";
import BrainBlock from "../components/Home/brain-block.js";
import CommunityCallout from "../components/Home/community-callout.js";
import ServiceBlock from "../components/Home/service-block.js";

const images = {
    "piano": {
        "default": "../images/piano.png",
        "hover": "../images/pianoHover.png"
    },
    "saxophone": {
        "default": "../images/saxophone.png",
        "hover": "../images/saxophoneHover.png"
    },
    "dolphin": {
        "default": "../images/dolphin.png",
        "hover": "../images/dolphinHover.png"
    }
};

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
          { "route": "/lessons", "text": "See Offerings" }
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

class Home extends Component {
  constructor( props ){
    super( props );

    this.state = {
      "route": "What do you want to learn about?",
      "dolphin": images[ "dolphin" ].default,
      "saxophone": images[ "saxophone" ].default,
      "piano": images[ "piano" ].default,
      "successful": false
    }
  }

  componentWillMount(){
    this.props.getMembers();
  }

  renderMembers( memberData ){
    const userLink = `/profile/${ memberData.username }`

    return(
      <Link to={ userLink }>
        <li key={ memberData.username } className="col-1-3 member">
          <img src={ memberData.profilePic }/>
          <h3 className="member-name">{ memberData.name }</h3>
          <p>{ memberData.title }</p>
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

  renderServices(){
      return (
          <div className="services-container">
            { services.map( ( service, i ) => (
                <ServiceBlock key={ i } service={ service }/>
            ) ) }
          </div>
      )

  }

  toggleImage( image ){
    const newState = {};

    if( this.state[ image ] === images[ image ].default ){
      newState[ image ] = images[ image ].hover;

      this.setState( newState );
    }
    else {
      newState[ image ] = images[ image ].default;

      this.setState( newState );
    }
  }

  render(){
      return(
        <div>
          <HomeSplash />
          <HomeSummary />
          <CommunityCallout
            text={ "Want to hear our latest community album? Find a CD at supporting businesses." }
            buttons={ [
                { "link": "/community", "text": "Learn More" }
            ] }
            color="#f2bf43"
          />
          <BrainBlock
            piano={ this.state.piano }
            togglePiano={ this.toggleImage.bind( this, "piano" ) }
            saxophone={ this.state.saxophone }
            toggleSax={ this.toggleImage.bind( this, "saxophone" ) }
            dolphin={ this.state.dolphin }
            toggleDolphin={ this.toggleImage.bind( this, "dolphin" ) }
          />

          { this.renderMembersList() }
        </div>
      );
  }
}

function mapStateToProps( state ){
  return { members: state.members.all };
}

export default connect( mapStateToProps, actions )( Home );
