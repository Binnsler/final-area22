import React, {Component} from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="absolute-center-children footer">
        <a href="https://www.facebook.com"><div className="social-icon facebook"><img src="/images/facebook.png" alt=""/></div></a>
        <a href="https://www.twitter.com"><div className="social-icon twitter"><img src="/images/twitter.png" alt=""/></div></a>
        <a href="https://www.youtube.com"><div className="social-icon youtube"><img src="/images/youtube.png" alt=""/></div></a>
      </div>
    );
  }
}

export default Footer;
