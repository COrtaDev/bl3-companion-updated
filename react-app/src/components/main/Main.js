import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import RightSidebarMenu from "./main-subcomponents/RightSidebarMenu";
import Header from "./main-subcomponents/Header";
import Feed from "./main-subcomponents/Feed";
import { sidebarRoutes } from "../../browserconfig";
import SubHeader from "./main-subcomponents/SubHeader";

const Main = () => {
  return (
    <>
      <div className={"is-flex is-flex-direction-row"}>
        <section
          style={{ borderRight: "1px solid" }}
          className={"hero is-fullheight is-justify-content-flex-start pl-4"}
        >
          <LeftSidebarMenu />
        </section>
        <main
          className={"is-flex is-flex-direction-row is-justify-content-center"}
        >
          <section
            // style={{ minWidth: "600px" }}
            className={"is-flex is-flex-direction-column is-align-items-center"}
          >
            <Header />
            <SubHeader />
            <Feed />
          </section>
          <section style={{ borderLeft: "1px solid" }} className={"is-flex"}>
            <RightSidebarMenu />
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;
