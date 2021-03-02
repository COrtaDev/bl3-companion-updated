import React, { useState, useEffect } from "react";
import ItemDropDown from "./ItemDropDown";

const LootDropForm = ({ hideForm }) => {
  return (
    <div id={"loot-drop-card"} className={`card is-shadowless animatedCard`}>
      {/* <div className={"is-flex is-justify-content-flex-end m-3"}>
        <div className={"media-right"}>
          <button className={"delete is-medium"} onClick={hideForm}></button>
        </div>
      </div> */}

      <div className={"card-content"}>
        <div className={"field has-addons has-addons-centered"}>
          <div className={"control is-expanded"}>
            <ItemDropDown />
            {/* <div className={"select is-fullwidth"}>
              <select name={"item"}>
                <option value={"item-01"}>Item 1</option>
                <option value={"item-02"}>Item 2</option>
                <option value={"item-03"}>Item 3</option>
                <option value={"item-04"}>Item 4</option>
                <option value={"item-05"}>Item 5</option>
                <option value={"item-06"}>Item 6</option>
              </select>
            </div> */}
          </div>
          <div className={"control"}>
            <button type={"submit"} className={"button"}>
              Choose Item
            </button>
          </div>
        </div>
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
