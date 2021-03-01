import React from "react";

const Feed = ({ feed, action, activeTab }) => {
  return (
    <>
      <h1>This is the feed!</h1>
      <h2>Now go {action}!!!!</h2>
    </>
  );
  // if (feed === "getFollowsOrFollowing") {
  //   if (activeTab === "following") {
  //     return (
  //       <>
  //         <h1>This is the feed!</h1>
  //         <h2>Show everyone I am {activeTab} here!!!</h2>
  //       </>
  //     );
  //   }
  //   if (activeTab === "followers") {
  //     return (
  //       <>
  //         <h1>This is the feed!</h1>
  //         <h2>Show all of my {activeTab} here!!!</h2>
  //       </>
  //     );
  //   }
  // } else {
  //   return (
  //     <>
  //       <h1>This is the feed!</h1>
  //       <h2>Now go {feed}!!!!</h2>
  //     </>
  //   );
  // }
};

export default Feed;
