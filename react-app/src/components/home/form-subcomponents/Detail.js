import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Detail = ({ detail, handleClick }) => {
  return (
    <button
      id={"details"}
      className={"button is-fullwidth p-0"}
      onClick={handleClick}
    >
      {detail}
      <FontAwesomeIcon id={"delete"} icon={faTimesCircle} className={"ml-3"} />
    </button>
  );
};

export default Detail;
