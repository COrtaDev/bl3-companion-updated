import React from 'react';
// import { LandingHeroHead, LandingHeroBody, LandingHeroFoot } from './landing-subcomponents/';
import LandingHeroHead from './landing-subcomponents/LandingHeroHead';
import LandingHeroBody from './landing-subcomponents/LandingHeroBody';
import LandingHeroFoot from './landing-subcomponents/LandingHeroFoot';
// import '../../styles/css/landingcss.css';
//TODO
//import LandingHeroHead, LandingHeroBody, & LandingHeroFoot components

const LandingHeroBanner = ({ authenticated, setAuthenticated }) => {
  //TODO
  // figure out how to get the codepen BL3 wallpaper as backgroun img for Hero Banner
  // needs to be full height and include a header & footer
  // render the LandingHeroHead, LandingHeroBody, & LandingHeroFoot components
  return (
    <section
      style={{
        backgroundImage: "url(https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcatnip%2FOak_StandardEdition_G1-1920x1080-4187bb7d0fa3f472c97bfe855096e06093af815f.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: "#999"
      }}
      className={"hero is-success is-fullheight"}>
      <div className={"hero-head"}>
        <LandingHeroHead />
      </div>
      <div className={"hero-body"}>
        <LandingHeroBody />
      </div>
      <div className={"hero-foot"}>
        <LandingHeroFoot />
      </div>
      {/* <div className={"bg-img"}></div> */}
    </section>
  );
}

export default LandingHeroBanner;
