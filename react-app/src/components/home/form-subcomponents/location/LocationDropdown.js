import React from "react";
import { locations } from "./allnamedlocations";

const LocationDropdown = ({ handleLocation }) => {
  const Planet = ({ name, locations }) => {
    return (
      <optgroup label={name}>
        {/* //map locations array here */}
        {locations.map((location, i) => (
          <Locations key={i} location={location} />
        ))}
      </optgroup>
    );
  };

  const Locations = ({ location }) => {
    return <option value={location}>{location}</option>;
  };

  return (
    <div className={"field is-horizontal level-item "}>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select"}>
              <select id={"select"} onChange={handleLocation}>
                <option value={""}>Location?</option>
                {/* //Map location Plants here as Optgroups here */}
                {locations.map((location, i) => (
                  <Planet
                    key={i}
                    name={location.name}
                    locations={location.locations}
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

export default LocationDropdown;
