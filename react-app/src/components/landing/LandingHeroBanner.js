import React from 'react';
import LandingHeroHead from './landing-subcomponents/LandingHeroHead';
import LandingHeroBody from './landing-subcomponents/LandingHeroBody';
import LandingHeroFoot from './landing-subcomponents/LandingHeroFoot';
import imgUrls from './landing-resouce-paths/landing-resources';

const LandingHeroBanner = ({ authenticated, setAuthenticated }) => {
  const [imgCenterUrl, imageYellowUrl, imgRedUrl] = imgUrls;
  // console.log(imgCenterUrl, imageYellowUrl, imgRedUrl)
  return (
    <>
      <img
        id={"imgCenter"}
        src={imgCenterUrl}
        alt={"Borderlands 3 Background Assest"}
      />
      <img
        id={"imgYellow"}
        src={imageYellowUrl}
        alt={"Borderlands 3 Background Assest"}
      />
      <img
        id={"imgRed"}
        src={imgRedUrl}
        alt={"Borderlands 3 Background Assest"}
      />
      <section className={"hero is-fullheight"}>
        <div className={"hero-head"}>
          <LandingHeroHead />
        </div>
        <div className={"hero-body"}>
          <LandingHeroBody
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
        <div className={"hero-foot"}>
          <LandingHeroFoot />
        </div>
      </section>
    </>
  );
}

export default LandingHeroBanner;
