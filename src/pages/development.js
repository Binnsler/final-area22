import React from "react";
import { Link } from "react-router";
import BlockImage from "../components/blocks/block-image";

const images = [
    "/images/developmentOne.jpg",
    "/images/developmentTwo.jpg",
    "/images/developmentThree.jpg",
    "/images/developmentFour.jpg",
    "/images/developmentFive.jpg",
    "/images/developmentSix.jpg"
];

const classes = [
    "Perfecting skills for vocals and the instrument(s) they play",
    "Songwriting",
    "Music Production",
    "Studio Recording and Live Performance technique and etiquette",
    "The Music Industry (how it really works)",
    "How to Copyright and Register songs and other works of art",
    "Cultural/Humanitarian Studies (to become a better human being and artist)",
    "PhotoShop and Illustrator (for CD/album art)",
    "Video Production software (for music video creation)"
];

const Development = () => (
  <div>
    <iframe className="splash-video" src="https://www.youtube.com/embed/NI7P-043jvQ" frameborder="0" allowfullscreen></iframe>
    <div className="col-1-4 center-me">
      <h3 className="center-me member-name">Lessons</h3>
      <img className="service-page" src='../images/developmentProductionIcon.png'/>
    </div>
    <div className="col-3-4">
      <div className="pad-20">
        <p className="paragraph">We are here to help you realize your musical dreams from the bottom up. Attend personal 1-on-1 classes with our staff members to learn a variety of instruments, singing, sound engineering, and business. We encourage those of all ages and skill levels to join! Interested in getting started? Please reach out to us via the contact form on our contact page or call Mallory at 508 333-2953 to set up your first lesson!</p>
        <Link to="/contact" className="black-button">Contact Us</Link>
      </div>
      <div className="pad-20">
        <h3 className="">Advanced Artist Development Program</h3>
        <p className="paragraph">This is an advanced program for artists who want to take their music and craft more seriously. The ultimate goal is to write and record an album and take it to the next level. If music is the only thing you envision yourself doing and you are ready for 100% dedication, this is for you. Call Mallory to set up your first lesson! 508 333-2953</p>
        <p className="paragraph">Please note: This premium program is designed for those who are qualified. It is not for the novice musician.
        Students will learn/build upon:</p>
        <ul className="class-list">
            { classes.map( ( text ) => <li>{ text }</li> ) }
        </ul>
        <p className="paragraph">*Some of these areas of study are also offered a la carte.</p>
      </div>
    </div>
    { images.map( ( image ) => <BlockImage image={ image }/> ) }
  </div>
)

export default Development;
