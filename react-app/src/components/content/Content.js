import React, { useState } from "react";
import Feed from "./content-subcomponents/Feed";
import Header from "./content-subcomponents/Header";
import SubHeader from "./content-subcomponents/SubHeader";
import Tutorial from "../tutorial/Tutorial";
// import { useHistory, useLocation } from "react-router-dom";

const Content = ({ title, feed, user, showTutorial }) => {
  const [activeTab, setActiveTab] = useState("following");
  // let history = useHistory();
  // let location = useLocation();
  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("followers")
      : setActiveTab("following");
  }

  return (
    <>
      {showTutorial && <Tutorial />}
      <Header title={title} user={user} />
      <SubHeader user={user} activeTab={activeTab} makeActive={toggleFeed} />
      <Feed feed={feed} user={user} activeTab={activeTab} />
    </>
  );
};

export default Content;
