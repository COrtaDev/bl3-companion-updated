import React from 'react';
import LoginSignUpCard from './loginsignupcard/LoginSignUpCard';

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  return (
    <div className={"container"}>
      <div className={"columns is-mobile is-flex-direction-row-reverse"}>
        <div className={"column is-two-fifths-desktop is-four-fifths-mobile"}>
          <LoginSignUpCard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
          {/* This is AUTO and should grow/shrink accordingly... */}
        <div className={"column is-narrow-mobile"}>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroBody;
