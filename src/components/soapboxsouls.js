import React, {Component} from 'react';
import {Link} from 'react-router';

class SoapboxSouls extends Component {
  render(){
    return(
      <div className="artworks">
        <img className="soapbox-splash" src="/images/SoapboxSouls.jpg"/>
        <div className="artworks-text">
            <p className="paragraph">Soapbox Souls is a group of multi-talented musicians who span generations and genres with their eclectic style. Be prepared to take an exciting journey through Rock, Pop, Blues, R&B, Country, and Americana while immersing yourself in truthful lyrics, intricately woven harmonies and clever song craft. Their sound is organic, full and effective, enhanced by the vocals of the four female singers that yield a tantalizing soundscape very few can replicate. From thought-provoking songs to sophisticated production power, Soapbox Souls sets the stage for music&#39;s newest renaissance.</p>
        </div>
      </div>
    )
  }
}

export default SoapboxSouls;
