import React, { useEffect } from 'react';
// import { LandingHeroHead, LandingHeroBody, LandingHeroFoot } from './landing-subcomponents/';
import LandingHeroHead from './landing-subcomponents/LandingHeroHead';
import LandingHeroBody from './landing-subcomponents/LandingHeroBody';
import LandingHeroFoot from './landing-subcomponents/LandingHeroFoot';
// import '../../styles/css/landingcss.css';
//TODO
//import LandingHeroHead, LandingHeroBody, & LandingHeroFoot components

const LandingHeroBanner = ({ authenticated, setAuthenticated }) => {
  // useEffect(() => {

  // });
  //TODO
  // figure out how to get the codepen BL3 wallpaper as backgroun img for Hero Banner
  // needs to be full height and include a header & footer
  // render the LandingHeroHead, LandingHeroBody, & LandingHeroFoot components
  return (
    <>
      <img id="imgCenter" src="https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcatnip%2FOak_StandardEdition_G1-1920x1080-4187bb7d0fa3f472c97bfe855096e06093af815f.jpg" />
      <img id="imgYellow" src="https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcatnip%2FOak_DeluxeEdition_G1-1920x1080-7689add5f0c19784dc6429bd386b7ce813067b0f.jpg" />
      <img id="imgRed" src="https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcatnip%2FOak_SuperDeluxeEdition_G1-1920x1080-4b5f1447fe534a79cb13c5064541772b203de525.jpg" />
      <section className={"hero is-fullheight  "}>
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
    </>
  );
}

export default LandingHeroBanner;
