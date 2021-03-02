import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../../styles/css/subheader.css";
import Home from "../../home/Home";
import Likes from "../../likes/Likes";
import Comment from "../../comments/Comments";
import Follows from "../../follows/Follows";
import Profile from "../../profile/Profile";

const SubHeader = ({ user, activeTab, makeActive }) => {
  const routes = [
    {
      path: "/home",
      exact: true,
      subheader: () => <Home user={user} />,
    },
    {
      path: "/likes",
      exact: true,
      subheader: () => <Likes user={user} />,
    },
    {
      path: "/comments",
      exact: true,
      active: "comments",
      subheader: () => <Comment user={user} />,
    },
    {
      path: "/follows",
      exact: true,
      subheader: () => (
        <Follows user={user} activeTab={activeTab} makeActive={makeActive} />
        // <Follows user={user} />
      ),
    },
    {
      path: "/profile",
      exact: true,
      subheader: () => <Profile user={user} />,
    },
  ];

  return (
    <Router>
      <Switch>
        <>
          <section id={"subheader-without-tabs"} className={"section p-0"}>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                children={<route.subheader />}
              />
            ))}
          </section>
        </>
      </Switch>
    </Router>
  );
};

export default SubHeader;
