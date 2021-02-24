import React from "react";
// import { useLocation } from "react-router-dom";

const Feed = ({ feed, activeTab }) => {
  console.log(activeTab);
  // let location = useLocation();
  // console.log(location.pathname);
  // TODO, depending on what is passed here we will need to render a different
  //*version of the feed.
  // console.log(subfeeds);
  return (
    <>
      <h1>This is the feed!</h1>
      <h2>Now go {feed}!!!!</h2>
    </>
  );
};

export default Feed;
