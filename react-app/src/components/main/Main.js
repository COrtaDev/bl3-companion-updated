import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import { sidebarRoutes } from "../../browserconfig";

import Content from "./Content";

const Main = () => {
  //TODO: We need to render a sibling component that encapsulates everything nested
  //*inside of the main tags... This is done to allow sidenav route config to function
  //as described in the documentation on the React Router site...
  return (
    <>
      <div className={"is-flex is-flex-direction-row"}>
        <section
          style={{ borderRight: "1px solid" }}
          className={"hero is-fullheight is-justify-content-flex-start pl-4"}
        >
          <LeftSidebarMenu />
        </section>
        <Content />
      </div>
    </>
  );
};

export default Main;
