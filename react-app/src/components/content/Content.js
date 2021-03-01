import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./content-subcomponents/Header";
import SubHeader from "./content-subcomponents/SubHeader";
import Feed from "./content-subcomponents/Feed";
import RightSidebarMenu from "../main/main-subcomponents/RightSidebarMenu";

const routes = [
  {
    path: "/home",
    exact: true,
    active: "home",
    main: () => (
      <Content
        headerTitle={"Home"}
        subheader={"Home Subheader Here!!!"}
        feed={"getLootDrops"}
      />
    ),
  },
  {
    path: "/likes",
    // exact: true,
    active: "likes",
    main: () => (
      <Content
        headerTitle={"Likes"}
        subheader={"SOOO many LIKES!!!"}
        feed={"getLikes"}
      />
    ),
  },
  {
    path: "/comments",
    exact: true,
    active: "comments",
    main: () => (
      <Content
        headerTitle={"Commets"}
        subheader={"Look at all these COMMENTS!!!"}
        feed={"getComments"}
      />
    ),
  },
  {
    path: "/follows",
    active: "follows",
    main: () => (
      <Content
        headerTitle={"Follows"}
        subheader={"makeTabs"}
        feed={"getFollowsOrFollowing"}
        subfeeds={subFeeds}
        subroutes={followsRoutes}
      />
    ),
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    main: () => (
      <Content
        headerTitle={"Profile"}
        subheader={<ProfileSubHeader />}
        feed={"getAllLootDropsForThisUser!!!"}
      />
    ),
  },
];
const Content = ({ title, subheader, feed, user, active, content }) => {
  const [activeTab, setActiveTab] = useState("following");

  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("followers")
      : setActiveTab("following");
  }

  return (
    <Router>
      <Switch>
        <>
          <main
            className={
              "is-flex is-flex-direction-row is-justify-content-center"
            }
          >
            <section
              className={
                "is-flex is-flex-direction-column is-align-items-center"
              }
            >
              <Header title={title} />
              <SubHeader subheader={subheader} user={user} />
              <Feed />
            </section>
          </main>
        </>
      </Switch>
      <section id={"right-sidenav-menu"} className={"is-flex"}>
        <RightSidebarMenu />
      </section>
    </Router>
  );
};

export default Content;
