import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import { handleResize } from "../../services/main";
import { sidebarRoutes } from "../../services/routeconfig";
import "../../styles/css/main.css";

const Main = ({ logout, setAuthenticated }) => {
  //*This component renders a secondary router that switches between routes as selected by the user
  //*when they click on them in the left sidenav panel. The routes are defined in "sidebarRoutes.js"
  //*located in "../../services/routeconfig.js". From there we can redefine the routes as needed without
  //*directly interacting with this component at all. Nifty-Spifty, doncha' know?

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
    <>
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
