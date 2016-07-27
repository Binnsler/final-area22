import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <ul>
          <li key={1} className="nav-link"><Link to="/">Home</Link></li>
          <li key={2} className="nav-link"><Link to="/about">About</Link></li>
          <li key={3} className="nav-link"><Link to="/learn">Learn</Link></li>
          <li key={3} className="nav-link"><Link to="/humanity">Humanity</Link></li>
          <li key={4} className="nav-link"><Link to="/audio">Audio</Link></li>
          <li key={5} className="nav-link"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
