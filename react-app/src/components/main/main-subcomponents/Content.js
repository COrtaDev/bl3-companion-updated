import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Feed from "./Feed";
import RightSidebarMenu from "./RightSidebarMenu";

const Content = () => {
  return (
    <main className={"is-flex is-flex-direction-row is-justify-content-center"}>
      <section
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
