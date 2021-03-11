import React, { useEffect, useState } from "react";
import { initializeIframe, resizeIframe } from "../../../services/main";
/*
TODO: On twitter, they render top news. we could fetch top articles from wikia and
*post them below the discord widget thingy... just a though for later
*/
import "../../../styles/css/rightsidebar.css";
const RightSidebarMenu = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (!width) {
      setWidth(initializeIframe());
    }
    //! I would love it if it didn't rerender everytime we clicked the sidenav
    window.addEventListener("resize", (event) => {
      resizeIframe();
    });
  }, [width]);

  return (
    <>
      <aside id={"right-sidenavbar"} className={"menu is-hidden-touch"}>
        <div id={"iframe-container"} className={"iframe-container ml-2 mt-2"}>
          <iframe
          title={"discord"}
            id={"discord-iframe"}
            className={"full-iframe"}
            src="https://discord.com/widget?id=454684422390808577&amp;theme=dark&amp;username=Corta.dev"
            allowtransparency="true"
            frameBorder="0"
          />
        </div>
      </aside>
    </>
  );
};

export default RightSidebarMenu;
