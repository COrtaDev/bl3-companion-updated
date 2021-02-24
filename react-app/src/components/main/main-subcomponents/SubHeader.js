import React, { useEffect, useState } from "react";
import FollowTabs from "../../follows/follows-subcomponents/FollowTabs";
import Follows from "../../follows/Follows";

const SubHeader = ({ subheaderType, subroutes }) => {
  const [activeTab, setActiveTab] = useState(null);
  console.log(activeTab);
  useEffect(() => {
    if (!activeTab) {
      return setActiveTab("following");
    }
    if (activeTab === "following") {
      console.log("Following for fucks sake!");
    } else {
      console.log("Followers for fuck sake!!!");
    }
  }, [activeTab]);

  function toggleFeed() {
    console.log("making active " + activeTab);
    activeTab === "following"
      ? setActiveTab("following")
      : setActiveTab("followers");
  }

  if (subheaderType === "makeTabs") {
    return (
      <>
        <section style={{ minWidth: "600px" }} className={"section p-0"}>
          {/* <Follows
            subroutes={subroutes}
            activeTab={activeTab}
            makeActive={toggleFeed}
          /> */}
          <FollowTabs
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
