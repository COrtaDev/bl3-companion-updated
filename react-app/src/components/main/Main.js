import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import Content from "./main-subcomponents/Content";
import { handleResize } from "../../services/main";
import { sidebarRoutes } from "../../services/routeconfig";
import "../../styles/css/main.css";

const Main = ({ logout, setAuthenticated }) => {
  const [justifyContent, setJustifyContent] = useState(
    "is-justify-content-center"
  );
  const [paddingLeft, setPaddingLeft] = useState("pl-4");
  //TODO: We need to render a sibling component that encapsulates everything nested
  //*inside of the main tags... This is done to allow sidenav route config to function
  //as described in the documentation on the React Router site...
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
    <>
      <Router>
        <div
          id={"main-app"}
          className={`is-flex is-flex-direction-row ${justifyContent}`}
        >
          <section
            style={{ borderRight: "1px solid" }}
            className={`hero is-fullheight is-justify-content-space-between ${paddingLeft}`}
          >
            <Switch>
              {sidebarRoutes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact}>
                  <LeftSidebarMenu
                    logout={logout}
                    paddingLeft={paddingLeft}
                    active={route.active}
                  />
                </Route>
              ))}
            </Switch>
          </section>
          <Switch>
            {sidebarRoutes.map((route, index) => (
              <Route
                {...route.routes}
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.main}
                setAuthenticated={setAuthenticated}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Main;
