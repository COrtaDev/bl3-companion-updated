import React, { useState } from 'react';
//TODO:
//need to import the TABS & MEDIA subcomponents here
import LoginSignUpCardTabs from './loginsignupcard-subcomponents/LoginSignUpCardTabs';
import LoginSignUpCardMedia from './loginsignupcard-subcomponents/LoginSignUpCardMedia';

const LoginSignUpCard = ({ authenticated, setAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('login');
  function toggleCard() {
    if (activeTab === 'login') {
      setActiveTab('signup');
    } else if (activeTab === 'signup') {
      setActiveTab('login');
    }
  }
  return (
    <div className={"card"}>
      <div className={"card-header"}>
        <LoginSignUpCardTabs
          activeTab={activeTab}
          makeActive={toggleCard}
        />
      </div>
      <div className={"card-content"}>
        <LoginSignUpCardMedia
          activeTab={activeTab}
          // makeActive={toggleCard}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
    </div>
  );
}

export default LoginSignUpCard;
