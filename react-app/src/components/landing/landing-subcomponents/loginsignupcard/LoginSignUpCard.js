import React from 'react';
//TODO:
//need to import the TABS & MEDIA subcomponents here
import LoginSignUpCardTabs from './loginsignupcard-subcomponents/LoginSignUpCardTabs';

const LoginSignUpCard = () => {
  //TODO:
  //need to define a card component here so it can hold the login/signin form
  //need to render the TABS & MEDIA as subcomponents of the CARD
  return (
    <div className={"card"}>
      <div className={"card-header"}>
        <LoginSignUpCardTabs />
      </div>
      <div className={"card-content"}>
        Render the forms here...
        {/* Render the forms here... */}
      </div>

    </div>
  );
}

export default LoginSignUpCard;
