import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ItemDropDown = () => {
  const [active, setActive] = useState("");

  const openMenu = (e) => (!active ? setActive("is-active") : setActive(""));

  return (
    <div id={"item-dropdown"} className={`dropdown ${active}`}>
      <div id={"item-dropdown"} className={"dropdown-trigger"}>
        <button
          id={"item-dropdown-button"}
          className={"button is-fullwidth"}
          onClick={openMenu}
        >
          <span>DropDown Button</span>
          <span className={"icon is-small"}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
      </div>
      <div id={"dropdown-menu"} className={"dropdown-menu"} role={"menu"}>
        <div className={"dropdown-content"}>
          
        </div>
      </div>
    </div>
  );
};

export default ItemDropDown;
