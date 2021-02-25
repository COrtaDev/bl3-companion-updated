import React, { useEffect, useState } from "react";
import FollowTabs from "../../follows/follows-subcomponents/FollowTabs";
import "../../../styles/css/subheader.css";

const SubHeader = ({ subheader, subroutes, activeTab, makeActive, user }) => {
  // console.log(subheader);
  console.log(user);
  if (subheader === "makeTabs") {
    return (
      <>
        <section id={"subheader-with-tabs"} className={"section p-0"}>
          <FollowTabs
            subroutes={subroutes}
            activeTab={activeTab}
            makeActive={makeActive}
          />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id={"subheader-without-tabs"} className={"section p-0"}>
          {subheader}
          {/* <h1>this is the subheader area!</h1>
          <h2>put a media card in here or something...</h2> */}
        </section>
      </>
    );
  }
};

export default SubHeader;
