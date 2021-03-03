import React, { useState, useEffect } from "react";
import { getLootInfo } from "../../../services/loot";
import ItemDropDown from "./ItemDropDown";
import LootImage from "./LootImage";

const LootDropForm = ({ hideForm }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [loot, setLoot] = useState(false);

  useEffect(() => {
    if (loot) return;
    if (imgUrl && itemUrl) {
      setLoot(true);
    }
  });

  const getInfo = async (selectedLoot) => {
    if (!selectedLoot) {
      return window.alert("Select Loot!");
    } else {
      const urls = await getLootInfo(selectedLoot);
      const { imgs, itemUrl } = urls;
      if (imgs.length > 1) {
        setItemUrl(itemUrl);
        return setImgUrl(imgs[imgs.length - 1]);
      }
      setImgUrl(imgs[0]);
      setItemUrl(itemUrl);
    }
  };

  console.log(imgUrl);
  console.log(itemUrl);

  return (
    <div id={"loot-drop-card"} className={`card is-shadowless animatedCard`}>
      {loot && <LootImage imgUrl={imgUrl} itemUrl={itemUrl} />}
      <div className={"card-content"}>
        {!loot && <ItemDropDown getInfo={getInfo} />}
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
