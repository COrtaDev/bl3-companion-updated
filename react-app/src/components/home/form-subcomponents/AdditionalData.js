import React, { useState } from "react";
import Levels from "./levels/Levels";
import Mayhem from "./mayhem/Mayhem";
import Location from "./location/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const AdditionalData = () => {
  const [level, setLevel] = useState(false);
  const [mayhem, setMayhem] = useState(false);
  const [location, setLocation] = useState(false);

  function handleLevel(e) {
    e.target.id === "add"
      ? setLevel(true)
      : e.target.id === "select"
      ? setLevel(e.target.value)
      : setLevel(false);
  }
  function handleMayhem(e) {
    e.target.id === "add"
      ? setMayhem(true)
      : e.target.id === "select"
      ? setMayhem(e.target.value)
      : setMayhem(false);
  }
  function handleLocation(e) {
    e.target.id === "add"
      ? setLocation(true)
      : e.target.id === "select"
      ? setLocation(e.target.value)
      : setLocation(false);
  }
  console.log(location);
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
              {level === true && <Levels handleLevel={handleLevel} />}
              {level >= 1 && level !== true && (
                <>
                  <span className={"icon-text"}>
                    <span>{level}</span>
                    <span className={"icon"}>
                      <button
                        id={"details"}
                        className={"button is-rounded p-0"}
                        // onClick={handleLevel}
                      >
                        <FontAwesomeIcon
                          id={"delete"}
                          icon={faTimesCircle}
                          className={"ml-2"}
                          size={"lg"}
                          onClick={handleLevel}
                        />
                      </button>
                    </span>
                  </span>
                </>
              )}
              {!level && (
                <>
                  <span className={"icon-text"}>
                    <span>Add</span>
                  </span>
                  <span className={"icon"}>
                    <button
                      id={"details"}
                      className={"button is-rounded p-0"}
                      // onClick={handleLevel}
                    >
                      <FontAwesomeIcon
                        id={"add"}
                        icon={faPlusCircle}
                        className={"ml-2"}
                        size={"lg"}
                        onClick={handleLevel}
                      />
                    </button>
                  </span>
                </>
              )}
            </td>
            <td>
              {mayhem === true && <Mayhem handleMayhem={handleMayhem} />}
              {mayhem >= 1 && mayhem !== true && (
                <>
                  <span className={"icon-text"}>
                    <span>{mayhem}</span>
                    <span className={"icon"}>
                      <button
                        id={"details"}
                        className={"button is-rounded p-0"}
                      >
                        <FontAwesomeIcon
                          id={"delete"}
                          icon={faTimesCircle}
                          className={"ml-2"}
                          size={"lg"}
                          onClick={handleMayhem}
                        />
                      </button>
                    </span>
                  </span>
                </>
              )}
              {!mayhem && (
                <>
                  <span className={"icon-text"}>
                    <span>Add</span>
                  </span>
                  <span className={"icon"}>
                    <button id={"details"} className={"button is-rounded p-0"}>
                      <FontAwesomeIcon
                        id={"add"}
                        icon={faPlusCircle}
                        className={"ml-2"}
                        size={"lg"}
                        onClick={handleMayhem}
                      />
                    </button>
                  </span>
                </>
              )}
            </td>
            <td>
              {location && <Location handleLocation={handleLocation} />}
              {!location && (
                <>
                  <span className={"icon-text"}>
                    <span>Add</span>
                  </span>
                  <span className={"icon"}>
                    <button id={"details"} className={"button is-rounded p-0"}>
                      <FontAwesomeIcon
                        id={"add"}
                        icon={faPlusCircle}
                        className={"ml-2"}
                        size={"lg"}
                        onClick={handleLocation}
                      />
                    </button>
                  </span>
                </>
              )}
            </td>
            <td>
              <button id={"add-details"} className={"button is-rounded p-0"}>
                <FontAwesomeIcon icon={faPlusCircle} size={"2x"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdditionalData;
