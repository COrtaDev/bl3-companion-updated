import React, { useState, useEffect } from "react";
import AddButton from "../AddButton";
import ElementDropdown from "./ElementDropdown";
import ElementTag from "./ElementTag";

const Elements = ({}) => {
  const [elements, setElements] = useState(false);
  const [elementsShows, setElementsShows] = useState("");
  useEffect(() => {
    if (elements === true) {
      setElementsShows("dropdown");
    } else if (elements.length >= 1 && elementsShows !== true) {
      setElementsShows("selected");
    } else {
      setElementsShows("");
    }
  }, [elements, elementsShows]);

  function handleElements(e) {
    e.target.id === "add"
      ? setElements(true)
      : e.target.id === "select"
      ? pushElement(e.target.value)
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
  }
  return (
    <>
      {elementsShows === "dropdown" && (
        <ElementDropdown
          handleClick={handleElements}
          currentElements={elements}
        />
      )}
      {elementsShows === "selected" && (
        <div className={"content"}>
          {elements.map((element, i) => (
            <ElementTag
              key={i}
              element={element}
              handleClick={handleElements}
            />
          ))}
        </div>
      )}
      {!elementsShows && <AddButton handleClick={handleElements} />}
    </>
  );
};

export default Elements;
