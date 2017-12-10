import React from "react";
import CommunityCallout from "../components/Home/community-callout.js";

const Community = () => (
  <div className="back-black">
    <div className="community-splash">
        <img src="/images/community-album.jpg"/>
    </div>
    <div className="community-page back-green">
        <div className="establishments artists">
            <h3 className="white">
                Featuring the following local artists:
            </h3>
            <ul className="white">
                <li>Macalla - "Galway Hooker"</li>
                <li>Steve Mazzetta - "On The Train"</li>
                <li>David Broadbent - "Tears"</li>
                <li>Brian Hitchings - "You Get Me High"</li>
                <li>Conspiracy of Noise - "Blues Before Sunrise"</li>
                <li>Johnny and Elizabeth Alves - "Hold On Me"</li>
                <li>Bob Nesom - "Watch Her"</li>
                <li>Brian Sances - "Days Of Gold"</li>
                <li>Eric Short - "Skipping Stones"</li>
                <li>Mallory Sabado - "Castles"</li>
                <li>Mwalim ( Da Phunkee Professor ) - "Like An Old School Record"</li>
                <li>John Chebator - "Prove It"</li>
                <li>Pat and Mal Fey - "Sing Me To Sleep"</li>
                <li>Soapbox Souls - "It's A Human Thing"</li>
            </ul>
            <h4 className="white">Congratulations to Mwalim and the Groovalatos for their four-time Grammy nominated album Ask Yo Mama, produced here at Area Twenty-Two.</h4>
        </div>
    </div>
    <CommunityCallout
      text={ "It is our privilege to present to you this compilation of unique and talented local artists who performed their original compositions live at the Area Twenty-Two production recording studio. This is the first edition of the Local Artist Sampler Series that we hope will promote the South Shore music scene which has grown tremendously over the past few years. We hope to help the scene achieve the international recognition it deserves. If you are interested in being on a future sampler, please contact us." }
      buttons={[]}
      color="#f2bf43"
    />
    <div className="community-page">
        <div className="establishments">
            <h3>
                Find the Area Twenty-Two 2017 compilation CD at these businesses supporting the local music and arts scene:
            </h3>
            <ul>
                <li>Asian Essence - Plymouth, MA</li>
                <li>Charlies Music - Hyannis, MA</li>
                <li>Crossroads Music - Hanover, MA</li>
                <li>Jacks Drum Shop - Hyannis, MA</li>
                <li>Kiskadee Coffee - Plymouth, MA</li>
                <li>South Shore Music - Weymouth, MA</li>
                <li>Spinnaker Records - Hyannis, MA</li>
                <li>Mars Records - Plymouth, MA</li>
                <li>Matts Music - Weymouth, MA</li>
                <li>Music of the Bay - Wareham, MA</li>
                <li>Music Unlimited - Kingston, MA</li>
                <li>The Music Box - Plymouth, MA</li>
            </ul>
        </div>
    </div>
  </div>
)

export default Community;
