import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Follows from "../../follows/Follows";

const SubHeader = ({ subheaderType, subroutes }) => {
  const [activeTab, setActiveTab] = useState("login");

  function toggleFeed() {
    activeTab === "following"
      ? setActiveTab("following")
      : setActiveTab("folowers");
  }

  if (subheaderType === "makeTabs") {
    return (
      <>
        <section style={{ minWidth: "600px" }} className={"section p-0"}>
          {/* <h1>We gotta {subheaderType}!!!</h1> */}
          <Follows
            subroutes={subroutes}
            activeTab={activeTab}
            makeActive={toggleFeed}
          />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section style={{ minWidth: "600px" }} className={"section"}>
          <h1>{subheaderType}</h1>
          <h1>this is the subheader area!</h1>
          <h2>put a media card in here or something...</h2>
        </section>
      </>
    );
  }
};

export default SubHeader;
