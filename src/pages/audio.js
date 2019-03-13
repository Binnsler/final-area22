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
            <div>
              <h1 className="vert-pad-20">What is Ana-Digi?</h1>
              <div className="paragraph pad-20">
                <p>Ana-Digi is an audio recording process created and pioneered by audio engineer / record producer Bob Yen Jr. over a period of three decades. Most audio production today is done by a completely digital process, which is perfect for advertising, commercials, and the like. It is sacrilege to record something that has soul, such as music being made by human beings (as opposed to just a bunch of synthesizers and digital sample loops) using digital production.</p>
                <p>The digital domain is cold, lonely, sterile and devoid of any soul in terms of how it ultimately holds sound - in barren zeros and ones. Why anyone would want to purposely attempt to capture a soulful event in this way is beyond belief.</p>
                <p>When all music used to be recorded on analog medium (tape), there was a certain warmth, expansion, saturation and soulfully sweet characteristic in the sound recording. It was always taken for granted that the soulful zen sound would always be there because that’s all there was. Analog tape machines and the supporting analog equipment (such as tube amps, tube compressors and tube equalization) were all that was used to make recordings and therefore music.</p>
                <p>The efficiency in editing and overall lower cost of the digital recording process has slowly, but firmly taken over how sound is recorded today. Initially the digital process was seen as a very sub standard audio experience, due to its coldness and harshness. But, as is often the case, the economics (cheaper operating costs and quickness in outputting audio product), has won over the music industry as the prefered platform with which to produce music today.</p>
                <p>Bob Yen Jr. realized that the editing in the digital domain was a very useful tool, but the audio product suffered in the overall sound quality. This realization inspired him to research ways to re-capture that forgotten soulful sound experience. </p>
                <p>One of the main components removed in the digital recording process was the use of analog tape which, while having great recording characteristics (better harmonic capturing and overall depth of sound), was very expensive, had poor shelf life (a tape only lasts for several years) and was difficult to edit. Instead of simply accepting the new digital format, Bob continued to experiment in how to capture what normally could only be captured on analog tape - without using analog tape. By using analog tube microphones, tube compressors, tube equalizers, high performance (hot rodded) mic pre’s and other related analog gear, Bob was able to find a formula that gave the warmth of analog, while allowing for the great editing capacities of digital.</p>
                <p>Bob named his new technique Ana-Digi.</p>
              </div>
            </div>
          </div>
          { images.map( ( image ) => <BlockImage image={ image }/> ) }
      </div>
    </div>
);


export default Audio;
