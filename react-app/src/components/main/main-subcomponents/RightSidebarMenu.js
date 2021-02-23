import React, { useEffect, useState } from "react";
/* //TODO: We will need to render an iframe for the discord on the right side
 *of the site. This was originally concevied as a way to take up dead space on
 *the site, and continues to do so up til today. Eventually, we will develop
 *more features for this site here, perhaps a feed of new articles from reddit
 *or FANDOM who knows...
 */
import "../../../styles/css/rightsidebar.css";
const RightSidebarMenu = () => {
  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1260) return;
    else if (window.innerWidth < 1260) {
      const iframeContainer = document.getElementById("iframe-container");
      setIframe(
        `${iframeContainer.clientWidth}px`,
        `${iframeContainer.clientHeight}px`
      );
    }
  });
  /*
  TODO:We need to render the iframe so it conforms with Bulma Styling...
  ?after that, we will want to develop this further, but given current time
  ?constraints that may not be possible...
  */
  useEffect(() => {
    const iframeContainer = document.getElementById("iframe-container");
    setIframe(
      `${iframeContainer.clientWidth}px`,
      `${iframeContainer.clientHeight}px`
    );
  });
  function setIframe(width, height) {
    const iframe = document.getElementById("discord-iframe");
    iframe.style.height = height;
    iframe.style.width = width;

  }
  return (
    <>
      <aside id={"right-sidenavbar"} className={"menu "}>
        <div id={"iframe-container"} className={"iframe-container ml-2 mt-2"}>
          <iframe
            id={"discord-iframe"}
            className={"full-iframe"}
            src="https://discord.com/widget?id=454684422390808577&amp;theme=dark&amp;username=Corta.dev"
            // width="350px"
            // height="700px"
            allowtransparency="true"
            frameBorder="0"
          />
        </div>
        <ul className={"menu-list"}>
          <li>
            {/* <figure className={"image pt-0"}> */}
            {/* </figure> */}
          </li>
        </ul>
      </aside>
    </>
  );
};

export default RightSidebarMenu;
