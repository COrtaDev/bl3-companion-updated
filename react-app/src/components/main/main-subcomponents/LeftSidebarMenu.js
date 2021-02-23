import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faCrosshairs,
  faBomb,
  faUserSecret,
  faCommentDollar,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/css/leftsidenav.css";
// import LogoutButton from "../../auth/LogoutButton";
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
        className={
          "is-flex is-flex-direction-column is-align-content-stretch is-justify-content-space-between pl-4"
        }
      >
        <div className={"menu pl-4"}>
          <ul className={"menu-list is-size-4"}>
            <li>
              <a>Logo</a>
            </li>
          </ul>
          <ul className={"menu-list is-size-4 pr-2"}>
            <li className={"level mb-0"}>
              <a
                className={
                  "level-left is-flex has-text-link button is-rounded is-large is-active"
                }
                href={"/home"}
              >
                <FontAwesomeIcon icon={faCaravan} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Home
                </p>
              </a>
            </li>
            <li className={"level mb-0"}>
              <a
                className={
                  "level-left is-flex has-text-link button is-rounded is-large"
                }
              >
                <FontAwesomeIcon icon={faBomb} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Likes
                </p>
              </a>
            </li>
            <li className={"level mb-0"}>
              <a
                id={"sidenav"}
                className={
                  "level-left is-flex has-text-link button is-rounded is-large"
                }
              >
                <FontAwesomeIcon icon={faCommentDollar} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Comments
                </p>
              </a>
            </li>
            <li className={"level mb-0"}>
              <a
                id={"sidenav"}
                className={
                  "level-left is-flex has-text-link button is-rounded is-large"
                }
              >
                <FontAwesomeIcon icon={faUserSecret} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Follows
                </p>
              </a>
            </li>
            <li className={"level mb-0"}>
              <a
                id={"sidenav"}
                className={
                  "level-left is-flex has-text-link button is-rounded is-large"
                }
              >
                <FontAwesomeIcon icon={faPiggyBank} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Profile
                </p>
              </a>
            </li>
            <li className={"level mb-0"}>
              <a
                className={
                  "level-left is-flex has-text-link button is-rounded is-large"
                }
              >
                <FontAwesomeIcon icon={faCrosshairs} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Tutorial
                </p>
              </a>
            </li>
          </ul>
        </div>
        {/* TODO: at some point, I will want avatar apear next to this as it does on twitter */}
        <div className={"is-flex pb-4 pr-2"}>{logout}</div>
      </div>
    </>
  );
};

export default LeftSidebarMenu;
