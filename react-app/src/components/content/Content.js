import React, { useState } from "react";
import Feed from "./content-subcomponents/Feed";
import Header from "./content-subcomponents/Header";
import SubHeader from "./content-subcomponents/SubHeader";

const Content = ({ title, feed, user }) => {
  const [activeTab, setActiveTab] = useState("following");

  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("followers")
      : setActiveTab("following");
  }

  return (
    <>
      <Header title={title} user={user} />
      <SubHeader user={user} activeTab={activeTab} makeActive={toggleFeed} />
      <Feed feed={feed} user={user} activeTab={activeTab} />
    </>
  );
};

export default Content;
