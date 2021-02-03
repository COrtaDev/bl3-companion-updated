import React from 'react';
import LoginSignUpCard from './loginsignupcard/LoginSignUpCard';
//TODO:
//need to import LoginSignUpCard component

const LandingHeroBody = ({ authenticated, setAuthenticated }) => {
  //TODO:
  //need to define the body of the Hero Banner here
  //need to render the LoginSignUpCard component here
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
