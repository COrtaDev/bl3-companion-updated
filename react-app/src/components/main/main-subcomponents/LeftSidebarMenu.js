import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faCrosshairs,
  faBomb,
  faUserSecret,
  faCommentDollar,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Tutorial from "../../tutorial/Tutorial";
import "../../../styles/css/leftsidenav.css";

//TODO:I see a lot of things I could map here using an array. For future reference...

const LeftSidebarMenu = ({ logout, paddingLeft, active }) => {
  const [homeActive, setHomeActive] = useState("");
  const [likesActive, setLikesActive] = useState("");
  const [commentsActive, setCommentsActive] = useState("");
  const [followsActive, setFollowsActive] = useState("");
  const [isActive, setIsActive] = useState(active);
  const [modalState, setModalState] = useState("");

  useEffect(() => {
    setIsActive(active);
    makeActive(isActive);
  }, [
    active,
    isActive,
    homeActive,
    likesActive,
    commentsActive,
    followsActive,
  ]);

  function makeActive(isActive) {
    switch (isActive) {
      case "home":
        return setHomeActive("is-active");
      case "likes":
        return setLikesActive("is-active");
      case "comments":
        return setCommentsActive("is-active");
      case "follows":
        return setFollowsActive("is-active");
    }
  }
  // function showTutorial() {}
  return (
    <>
      <Tutorial modalState={modalState} onHide={() => setModalState("")} />
      <div
        style={{ height: "100%" }}
        className={`is-flex is-flex-direction-column is-align-content-stretch is-justify-content-space-between ${paddingLeft}`}
      >
        <div className={"menu pl-4"}>
          <ul className={"menu-list is-size-4"}>
            <li>
              <a>Logo</a>
            </li>
          </ul>
          <ul className={"menu-list is-size-4 pr-2"}>
            <li className={"level mb-0"}>
              <Link
                to={"/home"}
                className={`level-left is-flex has-text-link button is-rounded is-large ${homeActive}`}
              >
                <FontAwesomeIcon icon={faCaravan} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Home
                </p>
              </Link>
            </li>
            <li className={"level mb-0"}>
              <Link
                to={"/likes"}
                className={`level-left is-flex has-text-link button is-rounded is-large ${likesActive}`}
              >
                <FontAwesomeIcon icon={faBomb} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Likes
                </p>
              </Link>
            </li>
            <li className={"level mb-0"}>
              <Link
                to={"/comments"}
                className={`level-left is-flex has-text-link button is-rounded is-large ${commentsActive}`}
              >
                <FontAwesomeIcon icon={faCommentDollar} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Comments
                </p>
              </Link>
            </li>
            <li className={"level mb-0"}>
              <Link
                to={"/follows"}
                className={`level-left is-flex has-text-link button is-rounded is-large ${followsActive}`}
              >
                <FontAwesomeIcon icon={faUserSecret} opacity="1" />
                <p id={"sidenav"} className={"ml-3 mr-2"}>
                  Follows
                </p>
              </Link>
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
                onClick={() => setModalState("is-active")}
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
        <div className={"is-flex pb-4 px-1"}>{logout}</div>
      </div>
    </>
  );
};

export default LeftSidebarMenu;
