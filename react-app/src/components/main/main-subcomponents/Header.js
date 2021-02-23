import React from "react";

const Header = () => {
  return (
    <>
      <section
        style={{ minWidth: "600px", borderBottom: "1px solid" }}
        className={"section px-3 py-0"}
      >
        <nav style={{ minHeight: "53px" }} className={"level"}>
          <div className={"level-left"}>
            {/* Todo: this will show the name of the current path we are on */}
            <h1>This current header name!</h1>
          </div>
          <div className={"level-right"}>
            {/* on twitter, this is for showing "top tweets..." */}
            <h1>something here...</h1>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
