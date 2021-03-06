import React from "react";

const ElementTag = ({ element, handleClick }) => {
  if (!element) return null;
  let split = element.split(" ");
  return (
    <span style={{ color: split[1] }} className={"tag"}>
      {split[0]}
      <button className={"delete"} onClick={handleClick}></button>
    </span>
  );
};

export default ElementTag;
