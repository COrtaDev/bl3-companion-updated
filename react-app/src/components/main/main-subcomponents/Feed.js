import React from "react";
// import { useLocation } from "react-router-dom";

const Feed = ({ feed, activeTab }) => {
  console.log(feed);
  console.log(activeTab);

  // let location = useLocation();
  // console.log(location.pathname);
  // TODO, depending on what is passed here we will need to render a different
  //*version of the feed.
  // console.log(subfeeds);
  if (feed === "getFollowsOrFollowing") {
    if (activeTab === "following") {
      return (
        <>
          <h1>This is the feed!</h1>
          <h2>Show everyone I am {activeTab} here!!!</h2>
        </>
      );
    }
    if (activeTab === "followers") {
      return (
        <>
          <h1>This is the feed!</h1>
          <h2>Show all of my {activeTab} here!!!</h2>
        </>
      );
    }
  } else {
    return (
      <>
        <h1>This is the feed!</h1>
        <h2>Now go {feed}!!!!</h2>
      </>
    );
  }
};

export default Feed;
