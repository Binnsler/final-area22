import React from "react";
import BlockImage from "../components/blocks/block-image";

const images = [
    "/images/audioProduction1.jpg",
    "/images/audioProduction2.jpg",
    "/images/audioProduction3.jpg",
    "/images/audioProduction4.jpg",
    "/images/audioProduction5.jpg",
    "/images/audioProduction6.jpg",
    "/images/audioProduction7.jpg",
    "/images/audioProduction8.jpg"
];

const Audio = () => (
      <div>
        <div className="community-splash">
          <img src="/images/malWendyCntrlRm.JPG"/>
        </div>
        <div>
          <div className="col-1-4">
            <h3 className="center-me member-name">Audio Production</h3>
            <img className="service-page" src='../images/audioProductionIcon.png'/>
          </div>
          <div className="col-3-4 pad-20">
            <h1 className="vert-pad-20">The Recording Process</h1>
            <h3 className="">Pre-Production</h3>
            <p className="paragraph pad-20">Preparation is half the battle. If you need help fleshing out the arrangement of your song, refining your performance, or devising any accompaniment, we are ready to give your production-to-be all the care it deserves before we set up any recording equipment.</p>
            <h3 className="">Recording</h3>
            <p className="paragraph pad-20">With our versatile set of microphones at your disposal, diverse set of monitoring options, and collection of outboard analog gear, we can't wait to record you. Recording is fun, especially when it's with us. </p>
            <h3 className="">Mixing</h3>
            <div className="paragraph pad-20">
              <p>Once we have the raw ingredients, we should probably mix them together. We're ready to make your sonic dream a reality with the surgical precision of our speaker collection. Whether it's gluing the bass with the kick drum, making your vocal sparkle, or giving your recording depth, punch, warmth, or all of the above, we have the tools and we know how to use them.</p>
            </div>
            <div>
              <h3 className="">Mastering</h3>
              <div className="paragraph pad-20">
                <p>Once we have mixed all recorded audio signals into a single stereo recording, our only remaining task is to guarantee that your recording will sound great no matter what pair of speakers it is heard on. Whether your listeners hear your production playback on their iPhone or on their home stereo system, on Youtube or Spotify, radio or television, we're ready to make sure that no part of the experience of your production will be left out of the picture.</p>
              </div>
            </div>
          </div>
          { images.map( ( image ) => <BlockImage image={ image }/> ) }
      </div>
    </div>
);


export default Audio;
