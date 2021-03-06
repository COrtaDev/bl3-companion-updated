import React, { useState, useEffect } from "react";
import Levels from "./levels/Levels";
import Mayhem from "./mayhem/Mayhem";
import Locations from "./location/Locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Elements from "./elements/Elements";

const AdditionalData = () => {
  const [elements, setElements] = useState(false);
  const [elementsShows, setElementsShows] = useState("");

  useEffect(() => {

    if (elements.length > 0 && elementsShows === "selected") {
    
      setElementsShows("more");
      return;
    } else if (elements === true) {
      setElementsShows("dropdown");
      return;
    } else if (elements.length > 0 && elementsShows === "more") {

      setElementsShows("selected");
      return;
    } else {
      setElementsShows("");
      return;
    }
  }, [elements, elementsShows]);

  function handleElements(e) {
    e.target.id === "add"
      ? setElements(true)
      : e.target.id === "select"
      ? pushElement(e.target.value)
      : e.target.id === "more"
      ? setElementsShows("more")
      : setElements(false);
  }
  function pushElement(element) {
    if (elements === true) {
      let newElement = [];
      newElement.push(element);
      setElements(newElement);
    } else {
      elements.push(element);
      setElements(elements);
    }
    setElementsShows("selected");
  }

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
              <Levels />
            </td>
            <td>
              <Mayhem />
            </td>
            <td>
              <Locations />
            </td>
            <td>
              {/* {elementsShows === "dropdown" && (
                <Elements
                  handleClick={handleElements}
                  currentElements={elements}
                />
              )}
              {elementsShows === "selected" && (
                <MoreButton handleClick={handleElements} />
              )}
              {elementsShows === "more" && (
                <Elements
                  handleClick={handleElements}
                  currentElements={elements}
                />
              )}
              {!elementsShows && <AddButton handleClick={handleElements} />}
              {elements.length > 0 && elementsShows !== false && (
                <div className={"content"}>
                  {elements.map((element, i) => (
                    <ElementTag
                      key={i}
                      element={element}
                      handleClick={handleElements}
                    />
                  ))}
                </div>
              )} */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdditionalData;
