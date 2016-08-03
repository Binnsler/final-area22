import React, {Component} from 'react';

class Audio extends Component {
  render(){
    return(
      <div>
        <h1 className="red-header2">Audio Production</h1>
        <div className="col-1-2">
          <p className="paragraph pad-20">We are a world-class recording facility offering our signature analog-digital or “Ana-Digi” recording sound. Artists from home and from across the globe have come to experience what we have to offer. From pre-production to mastering, we provide it all. Come to Area Twenty-Two to see and hear your ideas come to life.</p>
        </div>
        <div className="col-1-2">
          <p className="paragraph pad-20">Previous clients:</p>
          <p className="paragraph pad-20">Logo 1</p>
          <p className="paragraph pad-20">Logo 2</p>
          <p className="paragraph pad-20">Logo 3</p>
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
