import React, { useState } from "react";

const AdditionalData = () => {
  const [itemLevel, setItemLevel] = useState(null);
  const [itemMayhem, setItemMayhem] = useState(null);
  const [itemElement, setItemElement] = useState(null);
  const [hasLevel, setHasLevel] = useState(false);
  const [hasLocation, setHasLocation] = useState(false);
  const [hasMayhem, setHasMayhem] = useState(false);
  const [hasElement, setHasElement] = useState(false);
  const [hasMultipleElements, setHasMultipleElements] = useState(false);
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

  const mayhemLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let levels = [];
  if (!levels.length) {
    let level = 1;
    while (level < 66) {
      levels.push(level);
      level++;
    }
  }
  function handleLevel(e) {
    setItemLevel(e.target.value);
  }
  function handleMayhem(e) {
    setItemMayhem(e.target.value);
  }
  function handleElement(e) {
    let element = [];
    let index = elements.indexOf(
      (element) => element.element === e.target.value
    );
    element.push(elements.splice(index, 1));
    setItemElement(element);
    setElements(elements);
  }
  function handleMultipleElements(e) {
    hasMultipleElements
      ? setHasMultipleElements(false)
      : setHasMultipleElements(true);
  }
  function handleHasLevel(e) {
    if (hasLevel) {
      setHasLevel(false);
      setHasMayhem(false);
      setItemLevel(null);
    } else {
      setHasLevel(true);
    }
  }
  function handleHasLocation(e) {
    hasLocation ? setHasLocation(false) : setHasLocation(true);
  }
  function handleHasMayhem(e) {
    hasMayhem ? setHasMayhem(false) : setHasMayhem(true);
  }
  function handleHasElement(e) {
    hasElement ? setHasElement(false) : setHasElement(true);
  }
  console.log(itemElement);
  console.log(elements);
  return (
    <div className={"columns"}>
      {/*.....START left column.....*/}
      <div className={"column"}>
        {hasLevel && (
          <>
            {/*.........[start]===>LEVEL Dropdown selector.........*/}
            <div className={"field is-horizontal level-item mb-1"}>
              <div className={"field-label is-normal mr-2"}>
                <label className={"label is-size-6"}>Level</label>
              </div>
              <div className={"field-body"}>
                <div className={"field"}>
                  <div className={"control"}>
                    <div className={"select is-small"}>
                      <select onChange={handleLevel}>
                        <option value="">Level?</option>
                        {levels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*...........[end]===>LEVEL Dropdown selector...........*/}
          </>
        )}
        <div className={"field is-horizontal pt-1 mb-1"}>
          {/*............[start]===>LEVEL checkbox............*/}
          <div className={"control mr-2"}>
            <label className={"checkbox"}>
              <input
                className={"mr-2"}
                type={"checkbox"}
                name={"level"}
                value={"level"}
                checked={hasLevel}
                onChange={handleHasLevel}
              />
              Level?
            </label>
          </div>
          {/*.............[end]===>LEVEL checkbox.............*/}
          {itemLevel && hasLevel && (
            <>
              {/*.........[start]===>MAYHEM checkbox.........*/}
              <div className={"control ml-2"}>
                <label className={"checkbox"}>
                  <input
                    className={"mr-2"}
                    type={"checkbox"}
                    name={"mayhem"}
                    value={"mayhem"}
                    checked={hasMayhem}
                    onChange={handleHasMayhem}
                  />
                  Mayhem?
                </label>
              </div>
              {/*...........[end]===>MAYHEM checkbox...........*/}
            </>
          )}
        </div>
        {hasMayhem && itemLevel && (
          <>
            {/*.........[start]===>MAYHEM Dropdown selector.........*/}
            <div className={"field is-horizontal level-item mb-1"}>
              <div className={"field-label is-normal mr-2"}>
                <label className={"label is-size-6"}>Mayhem</label>
              </div>
              <div className={"field-body"}>
                <div className={"field"}>
                  <div className={"control"}>
                    <div className={"select is-small"}>
                      <select onChange={handleMayhem}>
                        <option value="">Mayhem?</option>
                        {mayhemLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*...........[end]===>MAYHEM Dropdown selector...........*/}
          </>
        )}
        <div className={"field is-horizontal mb-1"}>
          {/*............[start]===>ELEMENT checkbox............*/}
          <div className={"control mr-2 "}>
            <label className={"checkbox"}>
              <input
                className={"mr-2"}
                type={"checkbox"}
                name={"element"}
                value={"element"}
                checked={hasElement}
                onChange={handleHasElement}
              />
              Element?
            </label>
          </div>
          {/*............[end]===>ELEMENT checkbox............*/}
          {itemElement && (
            <>
              {/*............[start]===>MULTIPLE checkbox............*/}
              <div className={"control mr-2 "}>
                <label className={"checkbox"}>
                  <input
                    className={"mr-2"}
                    type={"checkbox"}
                    name={"element"}
                    value={"element"}
                    checked={hasMultipleElements}
                    onChange={handleMultipleElements}
                  />
                  Multiple?
                </label>
              </div>
              {/*............[end]===>MULTIPLE checkbox............*/}
            </>
          )}
        </div>

        {hasElement && (
          <>
            {/*.........[start]===>ELEMENT Dropdown selector.........*/}
            <div className={"field is-horizontal level-item mb-1"}>
              <div className={"field-label is-normal mr-2"}>
                <label className={"label is-size-6"}>Element</label>
              </div>
              <div className={"field-body"}>
                <div className={"field"}>
                  <div className={"control"}>
                    <div className={"select is-small"}>
                      <select onChange={handleElement}>
                        <option value="">Element?</option>
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
            {/*.........[end]===>ELEMENT Dropdown selector.........*/}
          </>
        )}
        {hasMultipleElements && (
          <>
            {/*...........[start]===>MULTIPLE ELEMENTS table...........*/}
            <table className={"table is-striped is-hoverable is-size-7"}>
              <thead>
                <tr>
                  <th className={"pb-0"}>No.</th>
                  <th className={"pb-0"}>Element</th>
                </tr>
              </thead>
              <tbody>
                {itemElement.map((element, i) => (
                  <>
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{element.element}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            {/*............[end]===>MULTIPLE ELEMENTS table............*/}
          </>
        )}
        {/*.........END left column.........*/}
      </div>

      {/*........START right column.......*/}
      <div className={"column"}>
        <div className={"field"}>
          {/*......[start]===>LOCATION checkbox......*/}
          <div className={"control"}>
            <label className={"checkbox"}>
              <input
                className={"mr-2"}
                type={"checkbox"}
                name={"location"}
                value={"location"}
                checked={hasLocation}
                onChange={handleHasLocation}
              />
              Location?
            </label>
          </div>
          {/*........[end]===>LOCATION checkbox........*/}
        </div>
      </div>
      {/*.........END right column........*/}
    </div>
  );
};

export default AdditionalData;
