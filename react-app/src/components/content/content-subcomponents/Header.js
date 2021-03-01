import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, user }) => {
  return (
    <>
      <section id={"main-header"} className={"section px-3 py-0"}>
        <nav id={"main-header"} className={"level"}>
          <div className={"level-left"}>
            {/* Todo: this will show the name of the current path we are on */}
            {/* <h1>This current header name!</h1> */}
            <h1>{title}</h1>
          </div>
          <div className={"level-right"}>
            <FontAwesomeIcon icon={faFireAlt} />
            <h1>TopDrops</h1>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
