import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { loot } from "../../../services/loot";

const ItemDropDown = () => {
  const [active, setActive] = useState("");

  const openMenu = (e) => (!active ? setActive("is-active") : setActive(""));

  return (
    <div className={"field has-addons has-addons-centered"}>
      <div className={"control is-expanded"}>
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
              {loot.map((item) => (
                <div className={"dropdown-item"}>{item.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={"control"}>
        <button type={"submit"} className={"button"}>
          Choose Item
        </button>
      </div>
    </div>
  );
};

export default ItemDropDown;
