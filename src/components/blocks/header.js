import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      menuVisible: false
    }
  }



  handleClick(){
    this.setState({menuVisible: !this.state.menuVisible})
    console.log(this.state.menuVisible)
  }

  render(){

    var visible = '';
    var active = '';

    if(this.state.menuVisible){
      var visible = 'open';
      var active = 'red';
    }


    var visibleMenu = `header-menu ${visible}`;
    var sandwichClasses = `nav-button hamburger-button ${active}`;


    return(
      <div className="header">
        <span className={sandwichClasses} onClick={this.handleClick.bind(this)}>&#9776;</span>
        <div className={visibleMenu} >
          <ul className="header-list">
            <li key={1} className="nav-link-container"><Link to="/" className="nav-link" onClick={this.handleClick.bind(this)}>Home</Link></li>
            <li key={2} className="nav-link-container"><Link to="/development" className="nav-link" onClick={this.handleClick.bind(this)}>Development</Link></li>
            <li key={3} className="nav-link-container"><Link to="/humanity" className="nav-link" onClick={this.handleClick.bind(this)}>Humanity</Link></li>
            <li key={4} className="nav-link-container"><Link to="/audio" className="nav-link" onClick={this.handleClick.bind(this)}>Audio Production</Link></li>
            <li key={5} className="nav-link-container"><Link to="/contact" className="nav-link" onClick={this.handleClick.bind(this)}>Contact</Link></li>
          </ul>
        </div>
        <img className="site-logo" src="/images/area22logo.png"/>
      </div>
    );
  }
}

export default Header;
