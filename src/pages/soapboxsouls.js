import React, { Component } from "react";
import members from "../data/members.json";
import CommunityCallout from "../components/Home/community-callout.js";


class SoapboxSouls extends Component{
    constructor( props ){
        super( props );
    }

    renderMembers( memberData ){
      return(
          <li key={ memberData.username } className="col-1-3 member">
            <img className="member-thumbnail" src={ memberData.profilePic }/>
            <h3 className="member-name">{ memberData.name }</h3>
            <p className="member-title">{ memberData.bio }</p>
          </li>
      )
    }

    renderMembersList(){
        return(
        <ul className="member-list">
          { members.map( this.renderMembers.bind( this ) ) }
        </ul>
      );
    }

    render(){
        return(
            <div className="artworks">
              <img className="soapbox-splash" src="/images/SoapboxSouls.jpg"/>
              <div className="artworks-text">
                  <p className="paragraph">Soapbox Souls is a group of multi-talented musicians who span generations and genres with their eclectic style. Be prepared to take an exciting journey through Rock, Pop, Blues, R&B, Country, and Americana while immersing yourself in truthful lyrics, intricately woven harmonies and clever song craft. Their sound is organic, full and effective, enhanced by the vocals of the four female singers that yield a tantalizing soundscape very few can replicate. From thought-provoking songs to sophisticated production power, Soapbox Souls sets the stage for music&#39;s newest renaissance.</p>
              </div>
              <CommunityCallout
                text={ "Soapbox Souls will be performing November 18th at 7pm in Dennisport at the Cape Cod Community Media Center. Tickets are $12 online and $15 at the door. Check it out!" }
                buttons={ [
                    { "url": "http://livefromcenterstage.com/product/soapbox-souls-nov-18-7pm-live-from-center-stage/", "text": "Tickets" }
                ] }
              />
              { this.renderMembersList() }
            </div>
        );
    }
}

export default SoapboxSouls;
