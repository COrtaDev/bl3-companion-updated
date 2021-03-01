import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FollowTabs from "../../follows/follows-subcomponents/FollowTabs";
import "../../../styles/css/subheader.css";

const SubHeader = ({ subheader, user }) => {
  // console.log(subheadercontent);
  // console.log(action);
  // console.log(user);

  return (
    <>
      <section id={"subheader-without-tabs"} className={"section p-0"}>
        {subheader}
      </section>
    </>
  );
};

export default SubHeader;
