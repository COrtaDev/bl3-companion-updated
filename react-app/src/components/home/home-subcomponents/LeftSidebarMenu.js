import React from "react";
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

const LeftSidebarMenu = () => {
  return (
    <aside className={"menu"}>
      <ul className={"menu-list"}>
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
    </aside>
  );
};

export default LeftSidebarMenu;
