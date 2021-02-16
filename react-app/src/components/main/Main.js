import React from "react";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import RightSidebarMenu from "./main-subcomponents/RightSidebarMenu";
import Header from "./main-subcomponents/Header";
import Feed from "./main-subcomponents/Feed";

const Main = () => {
  return (
    <>
      <nav className={"level is-align-items-start"}>
        <LeftSidebarMenu />

        <div className={"column is-half"}>
          <div className={"container"}>
            <Header />
            <Feed />
          </div>
        </div>

        <RightSidebarMenu />
      </nav>
    </>
  );
};

export default Main;
