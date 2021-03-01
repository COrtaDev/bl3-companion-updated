import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { handleResize } from "../../services/main";

import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import Content from "./main-subcomponents/Content";
import ProfileSubHeader from "../profile/ProfileSubHeader";
//TODO: Define and import the other subheaders here!
import "../../styles/css/main.css";

const routes = [
  {
    path: "/home",
    exact: true,
    active: "home",
    main: () => (
      <Content
        headerTitle={"Home"}
        subheader={"Home Subheader Here!!!"}
        feed={"getLootDrops"}
      />
    ),
  },
  {
    path: "/likes",
    // exact: true,
    active: "likes",
    main: () => (
      <Content
        headerTitle={"Likes"}
        subheader={"SOOO many LIKES!!!"}
        feed={"getLikes"}
      />
    ),
  },
  {
    path: "/comments",
    exact: true,
    active: "comments",
    main: () => (
      <Content
        headerTitle={"Commets"}
        subheader={"Look at all these COMMENTS!!!"}
        feed={"getComments"}
      />
    ),
  },
  {
    path: "/follows",
    active: "follows",
    main: () => (
      <Content
        headerTitle={"Follows"}
        subheader={"makeTabs"}
        feed={"getFollowsOrFollowing"}
        // subfeeds={subFeeds}
        // subroutes={followsRoutes}
      />
    ),
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    main: () => (
      <Content
        headerTitle={"Profile"}
        subheader={<ProfileSubHeader />}
        feed={"getAllLootDropsForThisUser!!!"}
      />
    ),
  },
];

const Main = ({ logout, user, main }) => {
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
              <MainRoutes key={i} {...route} />
            ))}
          </>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
