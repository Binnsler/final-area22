import React, {Component} from 'react';
import {Link} from 'react-router';

class Artworks extends Component {
  render(){
    return(
      <div className="artworks">
        <img className="artworks-splash" src="/images/ArtworksLogo.png"/>
        <div className="artworks-text">
            <p className="paragraph">Have you ever been told that making art will not take you anywhere? Has it been suggested that you probably should pursue something a little more "stable" and "profitable"?</p>
            <p className="paragraph">Well, we believe that ART WORKS and there's nothing more fulfilling than being your creative self! Human beings are inherently CREATIVE beings. We all have something we do that requires a special talent--from writing a song or learning dance choreography all the way to building model airplanes and painting the designs. Fear not, though. Just because you can't sing a tune or have "two left feet" doesn't mean you're not intrinsically artistic. If you simply enjoy singing out loud, and grooving along to the beat of the music, YOU ARE being your artistic self. If you allow yourself the time to let your creativity shine, you would be surprised at what hidden talents you possess! </p>
            <p className="paragraph">The Artworks design features the words Music, Art, Technology, Love, and Humanity. We believe all of these things are necessary when it comes to living a rich life. To have one, some, or all makes one fortunate soul.</p>
            <p className="paragraph">See what Art can do for you, and visit us at Area Twenty-Two!!!</p>
        </div>
      </div>
    )
  }
}

export default Artworks;
