import React from "react";
import { Link } from "react-router";

const BrainBlock = ( { dolphin, saxophone, piano, toggleDolphin, toggleSax, togglePiano } ) => (
    <div className="brain-block">
      <div className="brain-container">
        <img className="brain-splash" src="../images/brainSplash.jpg"/>
        <Link to="/philosophy"><img className="brain-dolphin" src={ dolphin } onMouseOver={ toggleDolphin } onMouseOut={ toggleDolphin }/></Link>
        <Link to="/audio"><img className="brain-saxophone" src={ saxophone } onMouseOver={ toggleSax } onMouseOut={ toggleSax }/></Link>
        <Link to="/development"><img className="brain-piano" src={ piano } onMouseOver={ togglePiano } onMouseOut={ togglePiano }/></Link>
      </div>
    </div>
)

export default BrainBlock;
