import React, { useState } from "react";
//Todo: identify the props that need to be passed here...
const ElementList = ({
  currentElement,
  setCurrentElement,
  setItemElements,
}) => {
  const [elements, setElements] = useState([
    {
      element: "Non-elemental",
      color: "#FFFFFF",
    },
    {
      element: "Incendiary",
      color: "#d88600",
    },
    {
      element: "Shock",
      color: "#00A3D8",
    },
    {
      element: "Corrosive",
      color: "#7ecb40",
    },
    {
      element: "Cryo",
      color: "#78CAD2",
    },
    {
      element: "Radiation",
      color: "#dddd00",
    },
  ]);
  function handleElement(e) {
    setCurrentElement(e.target.value);
    handleElementList(e);
  }

  function handleElementList(e) {
    let selected = elements.filter(
      (element) => element.element === e.target.value
    );
    let remainingElements = elements.filter(
      (element) => element.element !== e.target.value
    );
    setItemElements(selected);
    setElements(remainingElements);
  }
  return (
    <div className={"field is-horizontal level-item mb-1"}>
      <div className={"field-label is-normal mr-2"}>
        <label className={"label is-size-6"}>Element</label>
      </div>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select is-small"}>
              <select onChange={handleElement}>
                <option value={currentElement ? currentElement : ""}>
                  {currentElement ? `${currentElement}` : "Element?"}
                </option>
                {elements.map((element, i) => (
                  <option
                    key={i}
                    value={element.element}
                    style={{ color: element.color }}
                  >
                    {element.element}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ElementList;
