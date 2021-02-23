import React from "react";
import LogoutButton from "../../auth/LogoutButton";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
// const routes = [
//   {
//     path: "/home",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

const LeftSidebarMenu = ({ logout }) => {
  return (
    <>
      <div
        style={{ height: "100%" }}
        className={"is-flex is-flex-direction-column is-align-content-stretch is-justify-content-space-between pl-4"}
      >
        <div className={"menu pl-4"}>
          <ul className={"menu-list is-size-4"}>
            <li>
              <a className={""}>Logo</a>
            </li>
          </ul>
          <ul className={"menu-list is-size-4 pr-2"}>
            <li>
              <a href={"/home"}>Home</a>
            </li>
            <li>
              <a>Likes</a>
            </li>
            <li>
              <a>Follows</a>
            </li>
            <li>
              <a>Tutorial</a>
            </li>
          </ul>
        </div>
        <div className={"is-flex pb-4 pr-2"}>{logout}</div>
      </div>
    </>
  );
};

export default LeftSidebarMenu;
