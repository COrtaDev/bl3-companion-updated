import React, { useState, useEffect } from "react";
import LevelSelector from "./levels/LevelSelector";
import Mayhem from "./mayhem/Mayhem";
import Location from "./location/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const AdditionalData = () => {
  const [level, setLevel] = useState(false);
  const [levelShows, setLevelShows] = useState("");
  const [mayhem, setMayhem] = useState(false);
  const [mayhemShows, setMayhemShows] = useState("");
  const [location, setLocation] = useState(false);
  const [locationShows, setLocationShows] = useState("");

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
    console.log(e.target);
    e.target.id === "add"
      ? setLevel(true)
      : e.target.id === "select"
      ? setLevel(e.target.value)
      : setLevel(false);
  }
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

  const Detail = ({ detail, handleClick }) => {
    return (
      <button
        id={"details"}
        className={"button is-fullwidth p-0"}
        onClick={handleClick}
      >
        {detail}
        <FontAwesomeIcon
          id={"delete"}
          icon={faTimesCircle}
          className={"ml-3"}
        />
      </button>
    );
  };

  console.log(location);
  console.log(level);
  console.log(mayhem);

  return (
    <>
      <nav className={"level mb-0"}>
        <p className={"level-item has-text-centered"}>
          Additinal Details (optional)
        </p>
      </nav>
      <table
        id={"details-table"}
        className={"table is-bordered has-text-centered"}
      >
        <thead className={"pb-1"}>
          <tr className={"is-size-6 "}>
            <th>Level</th>
            <th>Mayhem</th>
            <th>Location</th>
            <th>Elements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {levelShows === "dropdown" && (
                <LevelSelector handleLevel={handleLevel} />
              )}
              {levelShows === "selected" && (
                <Detail detail={level} handleClick={handleLevel} />
              )}
              {!levelShows && <AddButton handleClick={handleLevel} />}
            </td>
            <td>
              {mayhemShows === "dropdown" && (
                <Mayhem handleMayhem={handleMayhem} />
              )}
              {mayhemShows === "selected" && (
                <Detail detail={mayhem} handleClick={handleMayhem} />
              )}
              {!mayhemShows && <AddButton handleClick={handleMayhem} />}
            </td>
            <td>
              {locationShows === "dropdown" && (
                <Location handleLocation={handleLocation} />
              )}
              {locationShows === "selected" && (
                <Detail detail={location} handleClick={handleLocation} />
              )}
              {!locationShows && <AddButton handleClick={handleLocation} />}
            </td>
            <td>
              <button id={"add-details"} className={"button is-rounded p-0"}>
                <FontAwesomeIcon icon={faPlusCircle} size={"2x"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdditionalData;
