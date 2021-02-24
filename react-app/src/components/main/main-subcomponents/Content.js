import React, { useState } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Feed from "./Feed";
import RightSidebarMenu from "./RightSidebarMenu";
import Follows from "../../follows/Follows";

const Content = ({ headerTitle, subheader, feed, subroutes }) => {
  const [followTabs, setFollowTabs] = useState(null);
  if (subroutes) {
    setFollowTabs(<Follows subroutes={subroutes} />);
  }
  return (
    <main className={"is-flex is-flex-direction-row is-justify-content-center"}>
      <section
        className={"is-flex is-flex-direction-column is-align-items-center"}
      >
        <Header title={headerTitle} subheaderType={subheader} />
        <SubHeader subheaderType={subheader} />
        {followTabs}
        <Feed feed={feed} />
      </section>
      <section style={{ borderLeft: "1px solid" }} className={"is-flex"}>
        <RightSidebarMenu />
      </section>
    </main>
  );
};

export default Content;
