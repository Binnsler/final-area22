import React, {Component} from 'react';

class NoMatch extends Component {
  render(){
    return(
      <div className="pad-20">
        <h1 className="red-header">404</h1>
        <h2>Oops, this page does not exist.</h2>
      </div>
    )
  }
}

export default NoMatch;
