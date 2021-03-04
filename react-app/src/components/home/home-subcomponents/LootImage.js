import React from "react";

const LootImage = ({ imgUrl, itemUrl }) => {
  return (
    <div className={"card-image px-3 pt-3"}>
      <div id={"image-box1"} className={"box p-0"}>
        <div id={"image-box2"} className={"box p-2"}>
          <figure
            id={"image-box"}
            className={"image is-2by1 is-fullwidth m-0 "}
          >
            <a
              href={itemUrl}
              target={"_blank"}
              referrerPolicy={"no-referrer"}
              rel={"noreferrer"}
            >
              <img
                id={"item-image"}
                scr={imgUrl}
                srcSet={imgUrl}
                referrerPolicy={"no-referrer"}
                alt={imgUrl}
                crossorigin
              />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default LootImage;
