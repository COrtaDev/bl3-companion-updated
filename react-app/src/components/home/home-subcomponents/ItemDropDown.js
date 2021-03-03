import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Items from "../form-subcomponents/Items";
import { loot } from "../../../services/loot";

const ItemDropDown = () => {
  const [selectedLoot, setSelectedLoot] = useState("");
  const [active, setActive] = useState("");
  const [itemName, setItemName] = useState("");

  const openMenu = (e) => (!active ? setActive("is-active") : setActive(""));

  const updateItemName = (e) => setItemName(e.target.value);

  function select(e) {
    setSelectedLoot(e.target.value);
    openMenu(e);
  }

  return (
    <div className={"field has-addons has-addons-centered"}>
      <div className={"control is-expanded"}>
        <div id={"item-dropdown"} className={`dropdown ${active}`}>
          <div id={"item-dropdown"} className={"dropdown-trigger"}>
            <button
              id={"item-dropdown-button"}
              className={"button is-fullwidth"}
              aria-haspopup={"true"}
              aria-controls={"dropdown-menu"}
              onClick={openMenu}
            >
              <span>{selectedLoot ? selectedLoot : "Select Loot Item"}</span>
              <span className={"icon is-small"}>
                <FontAwesomeIcon icon={faAngleDown} aria-hidden={"true"} />
              </span>
            </button>
          </div>
          <div id={"dropdown-menu"} className={"dropdown-menu"} role={"menu"}>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
              }}
              id={"dropdown-menu-background"}
              onClick={openMenu}
            ></div>
            <div className={"dropdown-content"}>
              <div className={"field px-4 pt-3"}>
                <label className={"label"}>Filter by name:</label>
                <div className={"control"}>
                  <input
                    className={"input"}
                    name={"itemName"}
                    type={"text"}
                    placeholder={"Type to filter..."}
                    value={itemName}
                    onChange={updateItemName}
                  />
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={"select is-multiple px-5"}
              >
                <select
                  style={{ width: "100%" }}
                  className={"is-hovered"}
                  multiple
                  size="10"
                >
                  <Items items={itemName} select={select} />
                </select>
              </div>
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
