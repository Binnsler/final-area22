import React from "react";
import { Link } from "react-router";

const HomeSplash = () => (
    <div className="splash-container">
      <img className="page-splash home-splash" src="../images/singSplash.jpg"/>
      <div className="splash-text">
        <h3 className="summary-text">Artists helping artists achieve their fullest potential.</h3>
        <Link to="/philosophy" className="solid-black-button">Learn More</Link>
      </div>
    </div>
);

export default HomeSplash;
