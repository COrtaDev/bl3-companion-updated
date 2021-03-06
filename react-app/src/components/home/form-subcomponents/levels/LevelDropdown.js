import React from "react";

const LevelDropdown = ({ handleLevel }) => {
  const levels = [];

  let level = 1;

  while (level < 66) {
    levels.push(level);
    level++;
  }

  return (
    <div className={"field is-horizontal level-item "}>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select"}>
              <select id={"select"} onChange={handleLevel}>
                <option value={""}>Level?</option>
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
  );
};

export default LevelDropdown;
