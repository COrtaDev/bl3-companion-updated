import React from "react";
import ItemDropDown from "./ItemDropDown";

const LootDropForm = ({ hideForm }) => {
  return (
    <div id={"loot-drop-card"} className={`card is-shadowless animatedCard`}>
      <div className={"card-content"}>
        <ItemDropDown />
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
