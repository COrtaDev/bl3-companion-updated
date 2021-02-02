import React from 'react';
//TODO:
//need to import LoginSignUpCard component

const LandingHeroBody = () => {
  //TODO:
  //need to define the body of the Hero Banner here
  //need to render the LoginSignUpCard component here
  return (
    <div className={"container"}>
      <div className={"columns"}>
        <div className={"column is-half"}>
          <LoginSignUpCard />
        </div>
        <div className={"column"}>
          {/* This is AUTO and should grow/shrink accordingly... */}
        </div>
      </div>
    </div>
  );
}

export default LandingHeroBody;
