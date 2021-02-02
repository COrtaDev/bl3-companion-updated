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
    <section className={"hero is-success is-fullheight bg-img"}>
      <div className={"hero-head"}>
        <LandingHeroHead />
      </div>
      <div className={"hero-body"}>
        <LandingHeroBody />
      </div>
      <div className={"hero-foot"}>
        <LandingHeroFoot />
      </div>
    </section>
  );
}

export default LandingHeroBanner;
