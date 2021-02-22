import React from "react";
import LoginSignUpCard from "./loginsignupcard/LoginSignUpCard";

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  return (
    <div
      className={
        "column is-two-fifths-fullhd \
    is-half-desktop is-two-thirds-tablet is-full-mobile"
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
