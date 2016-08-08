import React, {Component} from 'react';

class NoMatch extends Component {
  render(){
    return(
      <div className="pad-20">
        <div className="title-container">
          <div className="red-triangle"></div>
          <h1 className="title-text">404 Error</h1>
        </div>
        <h2>Oops, this page does not exist.</h2>
      </div>
    )
  }
}

export default NoMatch;
