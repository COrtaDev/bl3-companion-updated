import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./content-subcomponents/Header";
import SubHeader from "./content-subcomponents/SubHeader";
import Feed from "./content-subcomponents/Feed";
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
    center: () => <CenterContent title={"Home"} subheader={<Home />} />,
  },
  {
    path: "/likes",
    exact: true,
    active: "likes",
    center: () => <CenterContent title={"Likes"} subheader={<Likes />} />,
  },
  {
    path: "/comments",
    exact: true,
    active: "comments",
    center: () => <CenterContent title={"Comments"} subheader={<Comments />} />,
  },
  {
    path: "/follows",
    active: "follows",
    center: () => <CenterContent title={"Follows"} subheader={<Follows />} />,
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    center: () => <CenterContent title={"Profile"} subheader={<Profile />} />,
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
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  children={<route.center user={user} />}
                />
              ))}
              {/* <Header title={title} />
              <SubHeader subheader={subheader} user={user} />
              <Feed /> */}
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
