import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { handleResize } from "../../services/main";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import CenterContent from "./main-subcomponents/CenterContent";

import "../../styles/css/main.css";

const Main = ({ logout, user }) => {
  const routes = [
    {
      path: "/home",
      exact: true,
      active: "home",
      center: () => <CenterContent title={"Home"} user={user} />,
    },
    {
      path: "/likes",
      exact: true,
      active: "likes",
      center: () => <CenterContent title={"Likes"} user={user} />,
    },
    {
      path: "/comments",
      exact: true,
      active: "comments",
      center: () => <CenterContent title={"Commets"} user={user} />,
    },
    {
      path: "/follows",
      exact: true,
      active: "follows",
      center: () => <CenterContent title={"Follows"} user={user} />,
    },
    {
      path: "/profile", //!this will need to be a param most likely...
      exact: true,
      active: "profile",
      center: () => <CenterContent title={"Profile"} user={user} />,
    },
  ];

  const [justifyContent, setJustifyContent] = useState(
    "is-justify-content-center"
  );
  const [paddingLeft, setPaddingLeft] = useState("pl-4");

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      handleResize(
        justifyContent,
        setJustifyContent,
        paddingLeft,
        setPaddingLeft
      );
    });
  }, [justifyContent, paddingLeft]);

  return (
    <Router>
      <div
        id={"main-app"}
        className={`is-flex is-flex-direction-row ${justifyContent}`}
      >
        <section
          id={"left-sidenav-menu"}
          className={`hero is-fullheight is-justify-content-space-between ${paddingLeft}`}
        >
          <Switch>
            <>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} exact={route.exact}>
                  <LeftSidebarMenu
                    logout={logout}
                    paddingLeft={paddingLeft}
                    active={route.active}
                  />
                </Route>
              ))}
            </>
          </Switch>
        </section>
        <Switch>
          <>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                children={<route.center />}
              />
            ))}
          </>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
