import React, {Component} from 'react';
import {Link} from 'react-router';

class Development extends Component {
  render(){

    return(
      <div>
        <img className="page-splash" src="/images/artistDevelopment.jpg" />
        <div className="col-1-4 center-me">
          <h3 className="center-me member-name">Development</h3>
          <img className="service-page" src='../images/developmentProductionIcon.png'/>
        </div>
        <div className="col-3-4">
          <div className="pad-20">
            <p className="paragraph">We are here to help you realize your musical dreams from the bottom up. Attend personal 1-on-1 classes with our staff members to learn a variety of instruments, singing, sound engineering, and business. Interested in getting started? Please reach out to us via the contact form on our contact page or send us an email at info@areatwenty-two.com. We will set up a consultation to design a program that works for you.</p>
            <Link to="/contact" className="black-button">Contact Us</Link>
          </div>
          <div className="pad-20">
            <p className="paragraph">However you envision yourself as an artist, we are here to help you achieve your dreams. We offer classes for:</p>
            <ul className="class-list">
              <li>Vocals</li>
              <li>Guitar</li>
              <li>Graphic Artists</li>
              <li>Piano</li>
              <li>Illustators</li>
              <li>Painters</li>
              <li>Audio Engineering</li>
              <li>Music Business</li>
            </ul>
          </div>
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
