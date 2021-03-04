import React, { useState } from "react";
import Levels from "../form-subcomponents/levels/Levels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const AdditionalData = () => {
  const [level, setLevel] = useState(false);
  const [mayhem, setMayhem] = useState(false);

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
                        id={"add-details"}
                        className={"button is-rounded p-0"}
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
                      id={"add-details"}
                      className={"button is-rounded p-0"}
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
              {!mayhem && (
                <>
                  <span className={"icon-text"}>
                    <span>Add</span>
                  </span>
                  <span className={"icon"}>
                    <button
                      id={"add-details"}
                      className={"button is-rounded p-0"}
                    >
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
              <button id={"add-details"} className={"button is-rounded p-0"}>
                <FontAwesomeIcon icon={faPlusCircle} size={"2x"} />
              </button>
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
