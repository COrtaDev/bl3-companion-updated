import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Feed from "./Feed";
import RightSidebarMenu from "./RightSidebarMenu";

const Content = ({ title, subheader, feed, user, active, content }) => {
  const [activeTab, setActiveTab] = useState("following");
  // console.log(content);
  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("followers")
      : setActiveTab("following");
  }
  function HeaderRoutes(route) {
    // console.log(props)
    return (
      <Route
        path={route.path}
        exact={route.exact}
        // title={route.title}
        render={(props) => (
          <section
            className={"is-flex is-flex-direction-column is-align-items-center"}
          >
            <route.header.component
              {...props}
              title={route.title}
              user={user}
            />
            <route.subheader.component
              {...props}
              active={active}
              user={user}
              activeTab={activeTab}
              makeActive={toggleFeed}
              action={route.subheader.action}
              subheadercontent={route.subheader.subheadercontent}
              // text={route.subheader.text}
            />
            <route.feed.component
              {...props}
              action={route.feed.action}
              activeTab={activeTab}
            />
          </section>
        )}
      />
    );
  }
  return (
    <Router>
      <Switch>
      <main
        className={"is-flex is-flex-direction-row is-justify-content-center"}
      >
          {content.map((route, i) => (
            <HeaderRoutes key={i} {...route} />
          ))}
        <section id={"right-sidenav-menu"} className={"is-flex"}>
          <RightSidebarMenu />
        </section>
      </main>
        </Switch>
    </Router>
  );
};

export default Content;
