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
        {/*//!We need to re-evaluate this!!!!!!!!!
            //?Since there is another column, it is mucking up the responsivness
            //?of the landing hero....Why not instead just align the LoginSignUpCard
            //?to the right of the container??? That way it is always reflexive and
            //?we no longer need the columns! Might solve the issue of not displaying
            //?properly on mobile... just a thought. Proceed when ready....
          */}
        <div className={"column is-narrow-mobile"}>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroBody;
