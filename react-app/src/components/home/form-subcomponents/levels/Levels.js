import React, { useState, useEffect } from "react";
import AddButton from "../AddButton";
// import Detail from "../Detail";
import LevelDropdown from "./LevelDropdown";

const Levels = ({}) => {
  const [level, setLevel] = useState(false);
  const [levelShows, setLevelShows] = useState("");
  useEffect(() => {
    if (level === true) {
      setLevelShows("dropdown");
    } else if (level >= 1 && level !== true) {
      setLevelShows("selected");
    } else {
      setLevelShows("");
    }
  }, [level, levelShows]);

  function handleLevel(e) {
    e.target.id === "add"
      ? setLevel(true)
      : e.target.id === "select"
      ? setLevel(e.target.value)
      : setLevel(false);
  }
  const LevelTag = ({ level, handleClick }) => {
    return (
      <span className={"tag is-medium is-primary"}>
        {level}
        <button className={"delete"} onClick={handleClick}></button>
      </span>
    );
  };
  return (
    <>
      {levelShows === "dropdown" && <LevelDropdown handleLevel={handleLevel} />}
      {levelShows === "selected" && (
        <LevelTag level={level} handleClick={handleLevel} />
      )}
      {!levelShows && <AddButton handleClick={handleLevel} />}
    </>
  );
};

export default Levels;
