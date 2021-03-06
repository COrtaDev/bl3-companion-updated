import React, { useState, useEffect } from "react";
import { getLootInfo } from "../../../services/loot";
import AdditionalData from "../form-subcomponents/AdditionalData";
import ItemDropDown from "./ItemDropDown";
import LootImage from "./LootImage";

const LootDropForm = ({ hideForm }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [loot, setLoot] = useState(false);
  const [contentPadding, setContentPadding] = useState("");
  const [itemName, setItemName] = useState("");
  const [selectedLoot, setSelectedLoot] = useState("");
  const [active, setActive] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      handleReset();
      return;
    }
    if (loot) return;
    if (imgUrl && itemUrl) {
      setLoot(true);
      setContentPadding("pb-3 pt-1 px-3");
    }
  }, [
    imgUrl,
    itemUrl,
    loot,
    contentPadding,
    itemName,
    selectedLoot,
    active,
    reset,
  ]);

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
  const openMenu = (e) => (!active ? setActive("is-active") : setActive(""));

  const updateItemName = (e) => setItemName(e.target.value);

  const select = (e) => {
    setSelectedLoot(e.target.value);
    openMenu(e);
  };

  const deleteLoot = (e) => setReset(true);
  const handleReset = () => {
    setImgUrl("");
    setItemUrl("");
    setLoot(false);
    setContentPadding("");
    setItemName("");
    setSelectedLoot("");
    setActive("");
    hideForm();
    setReset(false);
  };
  console.log(loot);
  return (
    <div id={"loot-drop-card"} className={`card animatedCard`}>
      {loot && (
        <>
          <LootImage imgUrl={imgUrl} itemUrl={itemUrl} />
          <nav id={"loot-name"} className={"level mb-0"}>
            <p className={"level-item has-text-centered"}>
              <span className={"mb-0 is-size-3 has-text-weight-semibold"}>
                {selectedLoot}
              </span>
            </p>
          </nav>
        </>
      )}
      <div className={`card-content ${contentPadding}`}>
        {!loot && (
          <ItemDropDown
            active={active}
            openMenu={openMenu}
            getInfo={getInfo}
            itemName={itemName}
            updateItemName={updateItemName}
            selectedLoot={selectedLoot}
            select={select}
          />
        )}
        {loot && <AdditionalData />}
      </div>

      {loot && (
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
            onClick={deleteLoot}
          >
            Delete
          </button>
        </footer>
      )}
    </div>
  );
  // }
};

export default LootDropForm;
