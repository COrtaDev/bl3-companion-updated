import React from "react";
/* //TODO: We will need to render an iframe for the discord on the right side
 *of the site. This was originally concevied as a way to take up dead space on
 *the site, and continues to do so up til today. Eventually, we will develop
 *more features for this site here, perhaps a feed of new articles from reddit
 *or FANDOM who knows...
 */
const RightSidebarMenu = () => {
  /*
  TODO:We need to render the iframe so it conforms with Bulma Styling...
  ?after that, we will want to develop this further, but given current time
  ?constraints that may not be possible...
   */
  return (
    <>
      <aside className={"menu "}>
        <ul className={"menu-list"}>
          <li>
            {/* <figure className={"image pt-0"}> */}
            <div className={"iframe-container"}>
              I don't know how to fit the iframe here lmao
              {/* <iframe
                className={"full-iframe"}
                src="https://discord.com/widget?id=454684422390808577&amp;theme=dark&amp;username=Corta.dev"
                // width="auto"
                // height="100%"
                allowtransparency="true"
                frameBorder="0"
              /> */}
            </div>
            {/* </figure> */}
          </li>
        </ul>
      </aside>
    </>
  );
};

export default RightSidebarMenu;
