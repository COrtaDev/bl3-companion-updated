import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({ handleClick }) => {
  return (
    <button
      id={"add"}
      className={"button is-fullwidth p-0"}
      onClick={handleClick}
    >
      Add
      <FontAwesomeIcon id={"add"} icon={faPlusCircle} className={"ml-1"} />
    </button>
  );
};

export default AddButton;
