import React from "react";
import Levels from "./levels/Levels";
import Mayhem from "./mayhem/Mayhem";
import Locations from "./location/Locations";
import Elements from "./elements/Elements";

const AdditionalData = ({}) => {
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
              <Elements />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdditionalData;
