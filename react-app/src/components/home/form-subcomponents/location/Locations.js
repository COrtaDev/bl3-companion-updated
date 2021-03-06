import React, { useState, useEffect } from "react";
import AddButton from "../AddButton";
import LevelTag from "../LevelTag";
import LocationDropdown from "./LocationDropdown";

const Locations = ({}) => {
  const [location, setLocation] = useState(false);
  const [locationShows, setLocationShows] = useState("");

  useEffect(() => {
    if (location === true) {
      setLocationShows("dropdown");
    } else if (location.length >= 1 && location !== true) {
      setLocationShows("selected");
    } else {
      setLocationShows("");
    }
  }, [location, locationShows]);

  function handleLocation(e) {
    e.target.id === "add"
      ? setLocation(true)
      : e.target.id === "select"
      ? setLocation(e.target.value)
      : setLocation(false);
  }

  return (
    <>
      {locationShows === "dropdown" && (
        <LocationDropdown handleLocation={handleLocation} />
      )}
      {locationShows === "selected" && (
        <LevelTag level={location} handleClick={handleLocation} />
      )}
      {!locationShows && <AddButton handleClick={handleLocation} />}
    </>
  );
};

export default Locations;
