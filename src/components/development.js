import React, {Component} from 'react';
import {Link} from 'react-router';

class Development extends Component {
  render(){

    return(
      <div>
        <iframe className="splash-video" src="https://www.youtube.com/embed/NI7P-043jvQ" frameborder="0" allowfullscreen></iframe>
        <div className="col-1-4 center-me">
          <h3 className="center-me member-name">Development</h3>
          <img className="service-page" src='../images/developmentProductionIcon.png'/>
        </div>
        <div className="col-3-4">
          <div className="pad-20">
            <p className="paragraph">We are here to help you realize your musical dreams from the bottom up. Attend personal 1-on-1 classes with our staff members to learn a variety of instruments, singing, sound engineering, and business. Interested in getting started? Please reach out to us via the contact form on our contact page or call Mallory at 508 333-2953 to set up your first lesson!</p>
            <Link to="/contact" className="black-button">Contact Us</Link>
          </div>
          <div className="pad-20">
            <h3 className="">Advanced Artist Development Program</h3>
            <p className="paragraph">This is an advanced program for artists who want to take their music and craft more seriously. The ultimate goal is to write and record an album and take it to the next level. If music is the only thing you envision yourself doing and you are ready for 100% dedication, this is for you. We encourage those of all ages and skill levels to join! Classes are offered by the half hour or full hour, once a week. Call Mallory to set up your first lesson! 508 333-2953</p>
            <p className="paragraph">Please note: This premium program is designed for those who are qualified. It is not for the novice musician.
            Students will learn/build upon:</p>
            <ul className="class-list">
              <li>Perfecting skills for vocals and the instrument(s) they play</li>
              <li>Songwriting</li>
              <li>Music Production</li>
              <li>Studio Recording and Live Performance technique and etiquette</li>
              <li>The Music Industry (how it really works)</li>
              <li>How to Copyright and Register songs and other works of art</li>
              <li>Cultural/Humanitarian Studies (to become a better human being and artist)</li>
              <li>PhotoShop and Illustrator (for CD/album art)</li>
              <li>Video Production software (for music video creation)</li>
            </ul>
            <p className="paragraph">*Some of these areas of study are also offered a la carte.</p>
          </div>
        </div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentOne.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentTwo.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentThree.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentFour.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentFive.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/developmentSix.jpg"/></div>
      </div>
    )
  }
}

export default Development;
