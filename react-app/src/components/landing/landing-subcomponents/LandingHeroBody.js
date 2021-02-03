import React from 'react';
import LoginSignUpCard from './loginsignupcard/LoginSignUpCard';

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  return (
    <div className={"container"}>
      <div className={"columns is-flex-direction-row-reverse"}>
        <div className={"column is-two-fifths"}>
          <LoginSignUpCard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
        <div className={"column"}>
          {/* This is AUTO and should grow/shrink accordingly... */}
        </div>
      </div>
    </div>
  );
}

export default LandingHeroBody;
