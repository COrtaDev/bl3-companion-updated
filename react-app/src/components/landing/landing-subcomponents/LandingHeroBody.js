import React from 'react';
import LoginSignUpCard from './loginsignupcard/LoginSignUpCard';
//!We man need custom styles for mobile here!!!

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  return (
    < LoginSignUpCard
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
}

export default LandingHeroBody;
