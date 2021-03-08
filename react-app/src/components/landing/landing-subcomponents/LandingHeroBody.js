import React from "react";
import LoginSignUpCard from "./loginsignupcard/LoginSignUpCard";

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  return (
    <div
      className={
        "column is-two-fifths-fullhd is-half-desktop is-full-tablet is-full-mobile \
        is-size-1-mobile"
      }
    >
      <LoginSignUpCard
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
};

export default LandingHeroBody;
