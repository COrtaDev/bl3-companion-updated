import React, { useState, useEffect } from "react";
import ItemDropDown from "./ItemDropDown";

const LootDropForm = ({ hideForm }) => {
  return (
    <div id={"loot-drop-card"} className={`card is-shadowless animatedCard`}>
      <div className={"card-content"}>
        {/* <div className={"field has-addons has-addons-centered"}> */}
        {/* <div className={"control is-expanded"}> */}
        <ItemDropDown />
        {/* </div> */}
        {/* <div className={"control"}>
            <button type={"submit"} className={"button"}>
              Choose Item
            </button>
          </div> */}
        {/* </div> */}
      </div>

      <footer className={"card-footer"}>
        <button
          id={"loot-drop-card-button"}
          className={"button card-footer-item"}
        >
          Save
        </button>
        <button
          id={"loot-drop-card-button"}
          className={"button card-footer-item"}
        >
          Edit
        </button>
        <button
          id={"loot-drop-card-button"}
          className={"button card-footer-item"}
        >
          Delete
        </button>
      </footer>
    </div>
  );
  // }
};

export default LootDropForm;
