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
          { "route": "/engineering-course", "text": "Learn Engineering" },
          { "route": "/audio", "text": "Audio Production" },
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
    sandwichClasses = `hamburger-button ${active}`;


    return(
      <div>
        <div className="header">
          <span className={sandwichClasses} onClick={this.handleClick.bind(this)}>menu</span>
          <div className={visibleMenu} >
            <ul>
                { this.generateHeaderLinks() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
