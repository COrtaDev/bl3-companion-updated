import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FollowTabs from "../../follows/follows-subcomponents/FollowTabs";
import "../../../styles/css/subheader.css";
// import { Component } from "react";
// import ProfileSubHeader from "../../profile/ProfileSubHeader";

const SubHeader = ({ subheadercontent, action, user }) => {
  console.log(subheadercontent);
  console.log(action);
  console.log(user);

  function SubHeaderRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} user={user} />}
      />
    );
  }
  return (
    <Router>
      <Switch>
        <>
          <section id={"subheader-without-tabs"} className={"section p-0"}>
            {subheadercontent.map((route, i) => (
              <SubHeaderRoutes key={i} {...route} />
            ))}
          </section>
        </>
      </Switch>
    </Router>
  );
};

export default SubHeader;
