import React, { useEffect, useState } from "react";

const Notification = ({ itemUrl, selectedLoot }) => {
  const [textHidden, setTextHidden] = useState("is-hidden");
  const [page, setPage] = useState("");
  console.log(page);
  var textTimeoutID;

  useEffect(() => {
    if (!page && selectedLoot) setPage(selectedLoot);
  }, [page, selectedLoot]);

  function showText(e) {
    textTimeoutID = setTimeout(() => {
      setTextHidden("");
    }, 200);
  }
  function hideText(e) {
    clearTimeout(textTimeoutID);
    setTextHidden("is-hidden");
  }
  return (
    <a
      href={itemUrl}
      target={"_blank"}
      referrerPolicy={"no-referrer"}
      rel={"noreferrer"}
    >
      <div
        id={"notification-overlay"}
        className={"notification mb-0 p-2"}
        onMouseEnter={showText}
        onMouseLeave={hideText}
      >
        <p className={`${textHidden} has-text-black`}>
          Click here to go the {page} wiki...
        </p>
      </div>
    </a>
  );
};

export default Notification;
