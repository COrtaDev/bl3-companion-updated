import React, { useState, useEffect } from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "../../../styles/css/lootdropcard.css";
const LootDropForm = ({ hideForm }) => {
  return (
    <div id={"loot-drop-card"} className={`card is-shadowless animatedCard`}>
      <div className={"is-flex is-justify-content-flex-end m-3"}>
        <div className={"media-right"}>
          <button className={"delete is-large"} onClick={hideForm}></button>
        </div>
      </div>

      <div className={"card-content"}>
        <div className={"field has-addons has-addons-centered"}>
          <div className={"control is-expanded"}>
            <select name={"item"}>
              <option value={"item-01"}>Item 1</option>
              <option value={"item-02"}>Item 2</option>
              <option value={"item-03"}>Item 3</option>
              <option value={"item-04"}>Item 4</option>
              <option value={"item-05"}>Item 5</option>
              <option value={"item-06"}>Item 6</option>
            </select>

            <div className={"control"}>
              <button type={"submit"} className={"button"}>
                Choose Item
              </button>
            </div>
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
        <button className={"button card-footer-item"}>Edit</button>
        <button className={"button card-footer-item"}>Delete</button>
      </footer>
    </div>
  );
  // }
};

export default LootDropForm;
