import React from "react";

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
