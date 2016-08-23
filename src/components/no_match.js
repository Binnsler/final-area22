import React, {Component} from 'react';

class NoMatch extends Component {
  render(){
    return(
      <div>
          <div className="four0four">
            <h1 className="red">404 Error</h1>
            <h2>Please try a different route.</h2>
          </div>
      </div>
    )
  }
}

export default NoMatch;
