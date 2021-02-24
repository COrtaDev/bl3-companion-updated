import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Follows = ({ subroutes, activeTab, makeActive }) => {
  const [followingState, setFollowingState] = useState("");
  const [followersState, setFollowersState] = useState("");

  useEffect(() => {
    if (activeTab === "following") {
      setFollowingState("is-active disabledTab");
      setFollowersState("");
    } else if (activeTab === "folowers") {
      setFollowersState("is-active disabledTab");
      setFollowingState("");
    }
  }, [followingState, followersState, activeTab]);

  return (
    <div className={"tabs fulltabs is-boxed is-medium"}>
      <ul>
        <li className={followingState}>
          <Link to={"/follows/following"}>Following</Link>
        </li>
        <li className={followersState}>
          <Link to={"/follows/followers"}>Followers</Link>
          {/* <span>Followers</span> */}
        </li>
      </ul>
    </div>
  );
};

export default Follows;
