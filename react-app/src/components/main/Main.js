import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import { handleResize } from "../../services/main";
// import { sidebarRoutes } from "../../services/routeconfig";
import { sidebarRoutes } from "../../services/siderouteconfig";
import "../../styles/css/main.css";
// import Content from "./main-subcomponents/Content";

const Main = ({ logout, user, main }) => {
  //*This component renders a secondary router that switches between routes as selected by the user
  //*when they click on them in the left sidenav panel. The routes are defined in "sidebarRoutes.js"
  //*located in "../../services/routeconfig.js". From there we can redefine the routes as needed without
  //*directly interacting with this component at all. Nifty-Spifty, doncha' know?
  // console.log(user);
  console.log(main);
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

  function MainRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        active={route.active}
        render={(props) => (
          <route.component {...props} user={user} content={route.content} />
        )}
      />
    );
  }

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
              {sidebarRoutes.map((route, i) => (
                <Route key={i} path={route.path} exact={route.exact}>
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
            {main.map((route, i) => (
              <MainRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Main;
