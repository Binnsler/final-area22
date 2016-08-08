import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
  render(){
    return(
      <div className="footer">
        <div className="absolute-center-children">
          <a href="https://www.facebook.com"><div className="social-icon facebook"><img src="/images/facebook.png" alt=""/></div></a>
          <a href="https://www.twitter.com"><div className="social-icon twitter"><img src="/images/twitter.png" alt=""/></div></a>
          <a href="https://www.youtube.com"><div className="social-icon youtube"><img src="/images/youtube.png" alt=""/></div></a>
        </div>
        <Link to="/"><img className="footer-logo" src="/images/area22biglogo.png"/></Link>
      </div>
    );
  }
}

export default Footer;
