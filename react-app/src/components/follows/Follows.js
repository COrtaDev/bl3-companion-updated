import React, { useState, useEffect } from "react";

const Follows = ({ activeTab, user, makeActive }) => {
  const [followingState, setFollowingState] = useState("");
  const [followersState, setFollowersState] = useState("");

  useEffect(() => {
    if (activeTab === "following") {
      setFollowingState("is-active disabledTab");
      setFollowersState("");
    } else if (activeTab === "followers") {
      setFollowersState("is-active disabledTab");
      setFollowingState("");
    }
  }, [followingState, followersState, activeTab]);

  return (
    <div className={"tabs fulltabs is-boxed is-medium"}>
      <ul>
        <li className={followingState}>
          <a onClick={() => makeActive()}>
            <span>Following</span>
          </a>
        </li>
        <li className={followersState}>
          <a onClick={() => makeActive()}>
            <span>Followers</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Follows;
