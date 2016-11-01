import React, {Component} from 'react';

class Philosophy extends Component {

  handleClick(){
    console.log(this.props.children)
  }

  render(){
    return(
      <div>
        <img className="page-splash" src="/images/humanitySplash.jpg" />
        <div className="col-1-4 center-me">
          <h3 className="center-me member-name">Philosophy</h3>
          <img className="service-page" src='../images/communityIcon.png'/>
        </div>
        <div className="col-3-4">
          <p className="paragraph pad-20 mission-statement">We believe that all individuals possess great creative potential which some have not fully realized due to imposed limitations or fear. Through our endeavors, we strive to inspire others to seek out the creativity that exists within them.</p>
          <p className="paragraph pad-20">Area Twenty-Two is a place where people can feel free to express their talents in a nurturing environment to grow, develop, and prosper.  Everyone has a creative side, and we are here to help the artists/students bloom. This world doesn't always encourage us to take on our artistic endeavors because it's not what will "make the most money". We want to rid of the term "starving artist". This is a place where whatever someone does creatively, they can do it profitably.</p>
          <p className="paragraph pad-20">Artists have an ability to see beyond what's on the surface. They are truth seekers. What they see, they want to express. There are so many issues in the world that need to be spoken about, and artists can create works that have the potential to change one's perspective for the better.</p>
          <p className="paragraph pad-20">We are the facilitators of dreams. Music and all forms of art unite people. When we are given the freedom to express what is inside, it allows for more understanding and compassion. Art is a form of communication, and the Area Twenty-Two platform can be the medium.</p>
          <p className="paragraph pad-20">We make sure that as artists, we can effect change. Area Twenty-Two is not only a Production Facility/Record Label, but an advocate for oneness. We know how much the world is hurting, and we strive to help through our efforts as artists, in whatever capacity we can. Having a voice and a platform which allows us to speak on behalf of what is going on in the world is most important. The more we grow, the better chance we have of making a real difference in this world!</p>
        </div>
      </div>
    );
  }
}

export default Philosophy;
