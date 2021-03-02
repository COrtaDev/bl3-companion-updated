import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RightSidebarMenu from "../main-subcomponents/RightSidebarMenu";
import Content from "../../content/Content";

const CenterContent = ({ user }) => {
  const routes = [
    {
      path: "/home",
      exact: true,
      active: "home",
      content: () => (
        <Content title={"Home"} user={user} feed={"getHomeFeed"} />
      ),
    },
    {
      path: "/likes",
      exact: true,
      active: "likes",
      content: () => (
        <Content title={"Likes"} user={user} feed={"getLikesFeed"} />
      ),
    },
    {
      path: "/comments",
      exact: true,
      active: "comments",
      content: () => (
        <Content title={"Comments"} user={user} feed={"getCommentsFeed"} />
      ),
    },
    {
      path: "/follows",
      active: "follows",
      content: () => (
        <Content title={"Follows"} user={user} feed={"getFollowsFeed"} />
      ),
    },
    {
      path: "/profile",
      active: "profile",
      content: () => (
        <Content title={"Profile"} user={user} feed={"getProfileFeed"} />
      ),
    },
  ];
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
                  children={<route.content />}
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

export default CenterContent;
