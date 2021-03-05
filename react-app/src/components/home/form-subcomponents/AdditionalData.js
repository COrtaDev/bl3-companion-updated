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
import Elements from "./elements/Elements";

const AdditionalData = () => {
  const [level, setLevel] = useState(false);
  const [levelShows, setLevelShows] = useState("");
  const [mayhem, setMayhem] = useState(false);
  const [mayhemShows, setMayhemShows] = useState("");
  const [location, setLocation] = useState(false);
  const [locationShows, setLocationShows] = useState("");
  const [elements, setElements] = useState(false);
  const [elementsShows, setElementsShows] = useState("");

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

  useEffect(() => {
    if (elements === true) {
      setElementsShows("dropdown");
    } else if (elements.length >= 1 && elements !== true) {
      setElementsShows("selected");
    } else {
      setElementsShows("");
    }
  }, [elements, elementsShows]);

  function handleElements(e) {
    console.log(e.target.id);
    e.target.id === "add"
      ? setElements(true)
      : e.target.id === "select"
      ? pushElement(e.target.value)
      : setElements(false);
  }
  function pushElement(element) {
    let elements = [];
    elements.push(element);
    setElements(elements);
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
  const ElementTag = ({ element, handleClick }) => {
    if (!element) return null;
    console.log(element);
    const Tag = ({ element }) => {
      let split = element.split(" ");
      return (
        <span style={{ color: split[1] }} className={"tag"}>
          {split[0]}
          <button className={"delete"} onClick={handleClick}></button>
        </span>
      );
    };
    return (
      <>
        {element.map((element, i) => (
          <Tag key={i} element={element} />
        ))}
      </>
    );
  };

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
              {elementsShows === "dropdown" && (
                <Elements handleClick={handleElements} />
              )}
              {elementsShows === "selected" && (
                <>
                  <Elements
                    currentElements={elements}
                    handleClick={handleElements}
                  />
                  <span>
                    <ElementTag
                      element={elements}
                      handleClick={handleElements}
                    />
                  </span>
                </>
              )}
              {!elementsShows && <AddButton handleClick={handleElements} />}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdditionalData;
