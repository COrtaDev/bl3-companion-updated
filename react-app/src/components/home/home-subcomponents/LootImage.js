import React from "react";

const LootImage = ({ imgUrl, itemUrl }) => {
  return (
    <div className={"card-image"}>
      <figure className={"image is-2by1"}>
        <a
          href={itemUrl}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
          rel={"noopener"}
        >
          <img
            scr={imgUrl}
            srcSet={imgUrl}
            referrerPolicy={"no-referrer"}
            alt={imgUrl}
            crossorigin
          />
        </a>
      </figure>
    </div>
  );
};

export default LootImage;
