import React from "react";
import Feed from "./content-subcomponents/Feed";
import Header from "./content-subcomponents/Header";
import SubHeader from "./content-subcomponents/SubHeader";

const CenterContent = ({ title, subheader, feed, user }) => {
  return (
    <>
      <Header title={title} user={user} />
      <SubHeader subheader={subheader} />
      <Feed feed={feed} />
    </>
  );
};

export default CenterContent;
