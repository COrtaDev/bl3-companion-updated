import React from "react";
import Notification from "./Notification";

const LootImage = ({ imgUrl, itemUrl, selectedLoot }) => {
  let imgTimeout;
  function handleError(e) {
    imgTimeout = setTimeout(() => {
      let imgSrc = e.src;
      e.src = imgSrc;
    }, 500);
  }
  return (
    <div className={"card-image px-3 pt-3"}>
      <div id={"image-box1"} className={"box p-0"}>
        <div id={"image-box2"} className={"box p-2"}>
          <figure
            id={"image-box"}
            className={"image is-2by1 is-fullwidth m-0 "}
          >
            <Notification itemUrl={itemUrl} selectedLoot={selectedLoot} />
            <img
              id={"item-image"}
              scr={imgUrl}
              srcSet={imgUrl}
              loading={"lazy"}
              decoding={"sync"}
              onError={handleError}
              onLoad={() => clearTimeout(imgTimeout)}
              referrerPolicy={"no-referrer"}
              alt={imgUrl}
              crossorigin
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default LootImage;
