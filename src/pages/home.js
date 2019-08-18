// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as actions from "../actions";

// Components
import HomeSplash from "../components/Home/home-splash.js";
import TitleTextBlock from "../components/molecules/titleTextBlock.js";
import BrainBlock from "../components/Home/brain-block.js";
import CommunityCallout from "../components/Home/community-callout.js";
import ServiceBlock from "../components/Home/service-block.js";

// Data
import siteCopy from "../data/siteCopy.json";

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
    let extra = <br/>;

    if( memberData.username == "bobyen" ){
        extra = "7/5/1964 - 1/2/2019";
    }

    return(
      <Link to={ userLink }>
        <li key={ memberData.username } className="col-1-3 member">
          <img src={ memberData.profilePic }/>
          <h3 className="member-name">{ memberData.name }</h3>
          <p>{ memberData.title }</p>
          <p>{ extra }</p>
        </li>
      </Link>
    )
  }

  renderMembersList(){
    if( this.props.members ){
      return(
        <div>
          <img className="page-splash" src="../images/controlRoom.png"/>
          <ul className="member-list">
            { this.props.members.map( this.renderMembers.bind( this ) ) }
          </ul>
        </div>
      )
    }
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
        <div className="home">
          <HomeSplash />
          <div className="socials">
            <a href="https://www.facebook.com/AreaTwenty2/"><div className="facebook"><img src="/images/facebook.png" alt=""/></div></a>
            <a href="https://www.instagram.com/area_twentytwo/"><div className="instagram"><img src="/images/instagram.png" alt=""/></div></a>
            <a href="https://www.youtube.com/channel/UCywIQrSjXe4VYmL9H9BF2RQ"><div className="youtube"><img src="/images/youtube.png" alt=""/></div></a>
          </div>
          <TitleTextBlock
            backgroundColor="#1BA7C6"
            textColor="#FFFFFF"
            text={siteCopy.home.missionStatement}
          />
          <div className="callouts">
              <CommunityCallout
                text={ "Join us for a 6 week audio engineering and music production course!" }
                buttons={ [
                    { "link": "/engineering-course", "text": "Learn More" }
                ] }
                color="#F2BF43"
              />
              <CommunityCallout
                text={ "Read about us on WickedLocal Plymouth!" }
                buttons={ [
                    { "url": "http://plymouth.wickedlocal.com/news/20180110/area-twenty-two-building-music-business-from-basement-up", "text": "View Article" }
                ] }
                color="#EAEAEA"
              />

              <CommunityCallout
                text={ "Want to hear our latest community album? Find a CD at supporting businesses." }
                buttons={ [
                    { "link": "/community", "text": "Learn More" }
                ] }
                color="#F2BF43"
              />
        </div>

          { this.renderMembersList() }

          <BrainBlock
            piano={ this.state.piano }
            togglePiano={ this.toggleImage.bind( this, "piano" ) }
            saxophone={ this.state.saxophone }
            toggleSax={ this.toggleImage.bind( this, "saxophone" ) }
            dolphin={ this.state.dolphin }
            toggleDolphin={ this.toggleImage.bind( this, "dolphin" ) }
          />
        </div>
      );
  }
}

function mapStateToProps( state ){
  return { members: state.members.all };
}

export default connect( mapStateToProps, actions )( Home );
