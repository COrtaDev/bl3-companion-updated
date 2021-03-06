import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const MoreButton = ({ handleClick }) => {
  return (
    <button
      id={"more"}
      className={"button is-fullwidth p-0"}
      onClick={handleClick}
    >
      More
      <FontAwesomeIcon id={"more"} icon={faPlusCircle} className={"ml-1"} />
    </button>
  );
};

export default MoreButton;
