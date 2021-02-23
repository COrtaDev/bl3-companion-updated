import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeftSidebarMenu from "./main-subcomponents/LeftSidebarMenu";
import Content from "./main-subcomponents/Content";
import { handleResize } from "../../services/main";
import { sidebarRoutes } from "../../browserconfig";
import "../../styles/css/main.css";

const Main = ({ logout }) => {
  const [justifyContent, setJustifyContent] = useState(
    "is-justify-content-center"
  );
  const [paddingLeft, setPaddingLeft] = useState("pl-4");
  //TODO: We need to render a sibling component that encapsulates everything nested
  //*inside of the main tags... This is done to allow sidenav route config to function
  //as described in the documentation on the React Router site...
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      handleResize(
        justifyContent,
        setJustifyContent,
        paddingLeft,
        setPaddingLeft
      );
    });
  }, [justifyContent, paddingLeft]);

  return (
    <>
      <div
        id={"main-app"}
        className={`is-flex is-flex-direction-row ${justifyContent}`}
      >
        <section
          style={{ borderRight: "1px solid" }}
          className={`hero is-fullheight is-justify-content-space-between ${paddingLeft}`}
        >
          <LeftSidebarMenu logout={logout} paddingLeft={paddingLeft} />
        </section>
        <Content />
      </div>
    </>
  );
};

export default Main;
