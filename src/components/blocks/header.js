import React, { Component } from "react";
import { Link } from "react-router";
import HeaderLink from "./header-link.js";

class Header extends Component {

  constructor( props ){
    super( props );

    this.state = {
      "menuVisible": false
    }
  }

  componentDidMount(){
    // TODO: Make this click handler neater
    const mainBody = document.querySelector('.main-body');

    mainBody.addEventListener( "click", this.bodyClick.bind( this ) );
  }

  bodyClick(){
    this.setState( { "menuVisible": false } );
  }

  handleClick(){
    this.setState( { "menuVisible": !this.state.menuVisible } );
  }

  generateHeaderLinks(){
      const headerLinks = [
          { "route": "/", "text": "Home" },
          { "route": "/lessons", "text": "Music Lessons" },
          { "route": "/community", "text": "Community" },
          { "route": "/audio", "text": "Audio Production" },
          { "route": "/philosophy", "text": "Philosophy" },
          { "route": "/artworks", "text": "Artworks" },
          { "url": "https://www.soapboxsouls.com", "text": "Soapbox Souls" },
          { "route": "/contact", "text": "Contact" },
          { "url": "https://www.instagram.com/area_twentytwo/", "text": "Photos" }
      ];

      return headerLinks.map( ( link, i ) =>
          <HeaderLink key={ i } link={ link } onClick={ this.handleClick.bind( this ) } />
      );
  }

  render(){
    let visible = "";
    let active = "";
    let visibleMenu;
    let sandwichClasses;

    if( this.state.menuVisible ){
      visible = "open";
      active = "red";
    }

    visibleMenu = `header-menu ${visible}`;
    sandwichClasses = `nav-button hamburger-button ${active}`;


    return(
      <div>
        <div className="header">
          <span className={sandwichClasses} onClick={this.handleClick.bind(this)}>menu</span>
          <div className={visibleMenu} >
            <ul className="header-list">
                { this.generateHeaderLinks() }
            </ul>
          </div>
        </div>
        <div className="logo-container">
            <Link to="/"><img className="site-logo" src="/images/area22biglogo.png"/></Link>
        </div>
      </div>
    );
  }
}

export default Header;
