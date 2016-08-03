import React, {Component} from 'react';
import {Link} from 'react-router';

class Development extends Component {
  render(){
    return(
      <div>
      <h1 className="red-header2">Artist Development</h1>
        <div className="col-1-2 pad-20 align-top">
          <p className="paragraph">Do you have a talent that needs to shine? We are here help you realize your musical dreams from the bottom up. Attend personal 1-on-1 classes with our staff members to learn a variety of instruments, singing, sound engineering, and business. If you are interested in attending a class, please reach out to us via the contact form on our contact page or send us an email at info@areatwenty-two.com</p>
          <Link to="/contact" className="black-button">Contact Us</Link>
        </div>
        <div className="col-1-2 pad-20">
          <p className="paragraph">Wherever you envision yourself as an artist, we are here to get you there. We offer classes for:</p>
          <ul className="class-list">
            <li>Vocals</li>
            <li>Guitar</li>
            <li>Bass</li>
            <li>Piano</li>
            <li>Song Writing</li>
            <li>Audio Engineering</li>
            <li>Music Business</li>
          </ul>
        </div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentOne.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentTwo.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentThree.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentFour.jpg"/></div>
      </div>
    )
  }
}

export default Development;
