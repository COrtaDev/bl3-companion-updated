import React from "react";

const LevelTag = ({ level, handleClick }) => {
  return (
    <span className={"tag is-medium is-primary"}>
      {level}
      <button className={"delete"} onClick={handleClick}></button>
    </span>
  );
};

export default LevelTag;
