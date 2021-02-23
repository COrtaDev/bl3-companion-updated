import React from "react";
import Header from "./main-subcomponents/Header";
import SubHeader from "./main-subcomponents/SubHeader";
import Feed from "./main-subcomponents/Feed";
import RightSidebarMenu from "./main-subcomponents/RightSidebarMenu";

const Content = () => {
  return (
    <main className={"is-flex is-flex-direction-row is-justify-content-center"}>
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
  );
};

export default Content;
