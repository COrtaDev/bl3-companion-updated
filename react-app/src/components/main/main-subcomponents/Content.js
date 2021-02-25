import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Feed from "./Feed";
import RightSidebarMenu from "./RightSidebarMenu";
import Follows from "../../follows/Follows";

const Content = ({
  headerTitle,
  subheader,
  feed,
  subroutes,
  subfeeds,
  user,
  setAuthenticated,
}) => {
  const [activeTab, setActiveTab] = useState("following");
  console.log(user);
  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("followers")
      : setActiveTab("following");
  }

  return (
    <main className={"is-flex is-flex-direction-row is-justify-content-center"}>
      <section
        className={"is-flex is-flex-direction-column is-align-items-center"}
      >
        <Header title={headerTitle} subheader={subheader} />
        <SubHeader
          subheader={subheader}
          user={user}
          activeTab={activeTab}
          makeActive={toggleFeed}
        />
        <Feed
          feed={feed}
          subfeeds={subfeeds}
          activeTab={activeTab}
          setAuthenticated={setAuthenticated}
        />
      </section>
      <section id={"right-sidenav-menu"} className={"is-flex"}>
        <RightSidebarMenu />
      </section>
    </main>
  );
};

export default Content;
