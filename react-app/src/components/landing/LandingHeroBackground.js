import React from "react";
import imgUrls from "./landing-resouce-paths/landing-resources";
import "../../styles/css/landingcss.css";
//Todo: When rendered on narrow device I would love it if the image was offset slightly so we could see the psycho better
const LandingHeroBackground = () => {
  const [imgCenterUrl, imageYellowUrl, imgRedUrl] = imgUrls;
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
    </>
  );
};

export default LandingHeroBackground;
