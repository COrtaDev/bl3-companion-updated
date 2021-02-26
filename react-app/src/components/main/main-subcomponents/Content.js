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
    const { header, subheader, feed } = route;
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <>
            <header.component {...props} title={route.title} user={user} />
            <subheader.component
              {...props}
              active={active}
              user={user}
              activeTab={activeTab}
              makeActive={toggleFeed}
              action={route.subheader.action}
              subheadercontent={route.subheader.subheadercontent}
            />
            <feed.component
              {...props}
              action={route.feed.action}
              activeTab={activeTab}
            />
          </>
        )}
      />
    );
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
              {content.map((route, i) => (
                <HeaderRoutes key={i} {...route} />
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
