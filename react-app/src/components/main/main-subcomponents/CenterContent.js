import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RightSidebarMenu from "../main/main-subcomponents/RightSidebarMenu";
import Profile from "../profile/Profile";
import Home from "../home/Home";
import Likes from "../likes/Likes";
import Comments from "../comments/Comments";
import Follows from "../follows/Follows";

const routes = [
  {
    path: "/home",
    exact: true,
    active: "home",
    content: () => (
      <Content title={"Home"} subheader={<Home />} feed={"getHomeFeed"} />
    ),
  },
  {
    path: "/likes",
    exact: true,
    active: "likes",
    content: () => (
      <Content title={"Likes"} subheader={<Likes />} feed={"getLikesFeed"} />
    ),
  },
  {
    path: "/comments",
    exact: true,
    active: "comments",
    content: () => (
      <Content
        title={"Comments"}
        subheader={<Comments />}
        feed={"getCommentsFeed"}
      />
    ),
  },
  {
    path: "/follows",
    active: "follows",
    content: () => (
      <Content
        title={"Follows"}
        subheader={<Follows />}
        feed={"getFollowsFeed"}
      />
    ),
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    content: () => (
      <Content
        title={"Profile"}
        subheader={<Profile />}
        feed={"getProfileFeed"}
      />
    ),
  },
];

const Content = ({ title, user }) => {
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
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  children={<route.content user={user} />}
                />
              ))}
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
