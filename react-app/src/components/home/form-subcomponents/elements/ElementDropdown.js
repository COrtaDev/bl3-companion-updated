import React from "react";
import { allElements } from "./elements-subcomponents/elements";

let elements = allElements;
const ElementDropdown = ({ currentElements, handleClick }) => {
  if (currentElements && currentElements !== true) {
    let remainingElements = elements.filter((element) => {
      for (let i = 0; i < currentElements.length; i++) {
        let filter = currentElements[i].split(" ");
        return element.element !== filter[0];
      }
    });
    elements = remainingElements;
  }
  const Element = ({ element, color }) => {
    return (
      <option style={{ color: color }} value={element + " " + color}>
        {element}
      </option>
    );
  };
  return (
    <div className={"field is-horizontal level-item "}>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select"}>
              <select id={"select"} onChange={handleClick}>
                <option value={""}>Element?</option>
                {elements.map((element, i) => (
                  <Element
                    key={i}
                    element={element.element}
                    color={element.color}
                  />
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ElementDropdown;
