import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Feed from "./Feed";
import RightSidebarMenu from "./RightSidebarMenu";
import Follows from "../../follows/Follows";

const Content = ({ headerTitle, subheader, feed, subroutes }) => {
  let location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  console.log(location);
  console.log(currentLocation);
  useEffect(() => {
    if (!currentLocation) {
      return console.log("no location!!!");
    }
    console.log(currentLocation);
  }, [currentLocation]);
  return (
    <main className={"is-flex is-flex-direction-row is-justify-content-center"}>
      <section
        className={"is-flex is-flex-direction-column is-align-items-center"}
      >
        <Header title={headerTitle} subheaderType={subheader} />
        <SubHeader subheaderType={subheader} subroutes={subroutes} />
        {/* {followTabs} */}
        <Feed feed={feed} />
      </section>
      <section style={{ borderLeft: "1px solid" }} className={"is-flex"}>
        <RightSidebarMenu />
      </section>
    </main>
  );
};

export default Content;
