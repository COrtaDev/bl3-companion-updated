import React, { useState } from "react";
import LoginSignUpCardTabs from "./loginsignupcard-subcomponents/LoginSignUpCardTabs";
import LoginSignUpCardMedia from "./loginsignupcard-subcomponents/LoginSignUpCardMedia";

const LoginSignUpCard = ({ authenticated, setAuthenticated }) => {
  const [activeTab, setActiveTab] = useState("login");

  function toggleCard() {
    activeTab === "login" ? setActiveTab("signup") : setActiveTab("login");
  }

  return (
    <div className={"card"}>
      <div className={"card-header"}>
        <LoginSignUpCardTabs activeTab={activeTab} makeActive={toggleCard} />
      </div>
      <div className={"card-content"}>
        <LoginSignUpCardMedia
          activeTab={activeTab}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
    </div>
  );
};

export default LoginSignUpCard;
