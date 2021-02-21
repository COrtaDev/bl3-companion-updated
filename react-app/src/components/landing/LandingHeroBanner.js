import React from "react";
import LandingHeroHead from "./landing-subcomponents/LandingHeroHead";
import LandingHeroBody from "./landing-subcomponents/LandingHeroBody";
import LandingHeroFoot from "./landing-subcomponents/LandingHeroFoot";
import LandingHeroBackground from "./LandingHeroBackground";

const LandingHeroBanner = ({ authenticated, setAuthenticated }) => {
  return (
    <>
      <LandingHeroBackground />
      <section className={"hero is-fullheight"}>
        {/* <div className={"hero-head"}>
          <LandingHeroHead />
        </div> */}
        <div className={"hero-body is-justify-content-flex-end"}>
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
};

export default LandingHeroBanner;
