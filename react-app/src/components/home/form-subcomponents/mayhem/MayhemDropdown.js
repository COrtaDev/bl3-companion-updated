import React from "react";

const MayhemDropdown = ({ handleMayhem }) => {
  const mayhem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={"field is-horizontal level-item "}>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select"}>
              <select id={"select"} onChange={handleMayhem}>
                <option value={""}>Level?</option>
                {mayhem.map((level) => (
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
  );
};

export default MayhemDropdown;
