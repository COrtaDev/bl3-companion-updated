import React from "react";

const Elements = ({ currentElements, handleClick }) => {
  console.log(currentElements);
  const elements = [
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
  ];

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
export default Elements;
