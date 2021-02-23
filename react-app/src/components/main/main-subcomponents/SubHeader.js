import React from "react";

const SubHeader = () => {
  // TODO: this will most likely be a media card, with options to render
  //* the Create Loot Drop Component...
  //? if we are on a route like following or likes or comments etc
  //?we may end up returning null from this component, which is fine...
  //!OR we will need to render tabs for following etc but will need to be
  //!developed more thoughly at a later time...
  return (
    <>
      <section style={{ minWidth: "600px" }} className={"section"}>
        <h1>this is the subheader area!</h1>
        <h2>put a media card in here or something...</h2>
      </section>
    </>
  );
};

export default SubHeader;
