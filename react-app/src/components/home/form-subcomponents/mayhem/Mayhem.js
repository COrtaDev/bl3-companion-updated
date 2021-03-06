import React, { useState, useEffect } from "react";
import LevelTag from "../LevelTag";
import MayhemDropdown from "./MayhemDropdown";
import AddButton from "../AddButton";

const Mayhem = ({}) => {
  const [mayhem, setMayhem] = useState(false);
  const [mayhemShows, setMayhemShows] = useState("");

  useEffect(() => {
    if (mayhem === true) {
      setMayhemShows("dropdown");
    } else if (mayhem >= 1 && mayhem !== true) {
      setMayhemShows("selected");
    } else {
      setMayhemShows("");
    }
  }, [mayhem, mayhemShows]);

  function handleMayhem(e) {
    e.target.id === "add"
      ? setMayhem(true)
      : e.target.id === "select"
      ? setMayhem(e.target.value)
      : setMayhem(false);
  }

  return (
    <>
      {mayhemShows === "dropdown" && (
        <MayhemDropdown handleMayhem={handleMayhem} />
      )}
      {mayhemShows === "selected" && (
        <LevelTag level={mayhem} handleClick={handleMayhem} />
      )}
      {!mayhemShows && <AddButton handleClick={handleMayhem} />}
    </>
  );
};

export default Mayhem;
