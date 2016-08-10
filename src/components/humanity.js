import React, {Component} from 'react';

class Humanity extends Component {

  handleClick(){
    console.log(this.props.children)
  }

  render(){
    return(
      <div>
        <img className="page-splash" src="/images/humanitySplash.jpg" />
        <div className="col-1-4 center-me">
          <h3 className="center-me red">Humanity</h3>
          <img className="service-page" src='../images/communityIcon.png'/>
        </div>
        <div className="col-3-4">
        <p className="paragraph pad-20">We want to make sure that as artists, we can effect change. Area Twenty-Two is not only a Recording Facility/Record Label, but an advocate for oneness. We know how much the world is hurting, and we strive to help through our efforts as artists, in whatever capacity we can. Having a voice and a platform which allows us to speak on behalf of what is going on in the world is most important. The more we grow, the better chance we have of making a real difference in this world!</p>
        </div>
      </div>
    );
  }
}

export default Humanity;
