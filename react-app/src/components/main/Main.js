import React from "react";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import RightSidebarMenu from "./main-subcomponents/RightSidebarMenu";
import Header from "./main-subcomponents/Header";
import Feed from "./main-subcomponents/Feed";

const Main = () => {
  return (
    <>
      <div className={"columns is-vcentered is-align-items-flex-start"}>
        <div className={"column is-one-fifth"}>
          <div className={"level-right"}>
            <LeftSidebarMenu />
          </div>
        </div>

        <div className={"column is-two-thirds"}>
          <div className={"columns"}>
            <div
              className={
                "column is-two-thirds-fullhd is-two-thirds-widescreen is-two-thirds-desktop is-two-thirds-tablet is-two-thirds-mobile"
              }
            >
              <div className={"level is-flex-direction-column"}>
                <Header />
                <Feed />
              </div>
            </div>

            <div className={"column"}>
              <div className={"level-left"}>
                <RightSidebarMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
