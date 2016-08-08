import React, {Component} from 'react';

class Audio extends Component {
  render(){
    return(
      <div>
        <img className="page-splash" src="/images/audioSplash.jpg" />
        <div>
        <div className="col-1-4">
        <h3 className="center-me red">Audio Production</h3>
        <img className="service-page" src='../images/developmentProductionIcon.png'/>
        </div>
          <div className="col-3-4">
            <p className="paragraph pad-20">We are an industry-grade recording facility offering our signature analog-digital or “Ana-Digi” recording sound. Artists from home and from across the globe have come to experience what we have to offer. From pre-production to mastering, we provide it all. Come to Area Twenty-Two to see and hear your ideas come to life.</p>
            <p className="paragraph pad-20">Here is a bunch of other content that will explain the recording services offered by Area Twenty-Two.</p>
          </div>
        </div>
        <div className="col-1-2"><img className="page-splash" src="/images/audioProduction1.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/audioProduction2.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/audioProduction3.jpg"/></div>
        <div className="col-1-2"><img className="page-splash" src="/images/audioProduction4.jpg"/></div>
      </div>
    );
  }
}

export default Audio;
