import React, { Component } from "react";
import { Link } from "react-router";

const Footer = () => (
  <div className="footer">
    <div className="socials">
      <a href="https://www.facebook.com/AreaTwenty2/"><div className="facebook"><img src="/images/facebook.png" alt=""/></div></a>
      <a href="https://www.instagram.com/area_twentytwo/"><div className="instagram"><img src="/images/instagram.png" alt=""/></div></a>
      <a href="https://www.youtube.com/channel/UCywIQrSjXe4VYmL9H9BF2RQ"><div className="youtube"><img src="/images/youtube.png" alt=""/></div></a>
    </div>
    <Link to="/"><img className="footer-logo" src="/images/area22biglogo.png"/></Link>
    <p className="footer-credit">Photo Credit: <a href="https://www.facebook.com/PhotographyByElleMichelle/?fref=ts ">Elle Michelle</a></p>
    <p className="footer-credit">Photo Credit: <Link to="/profile/bobyen">Bob Yen Jr.</Link></p>
    <p className="footer-credit">Website: <a href="https://linkedin.com/in/jamiebinns">Jamie Binns</a></p>
    <p className="footer-credit">All Rights Reserved Area Twenty-Two &#169; 2018</p>
  </div>
);

export default Footer;
