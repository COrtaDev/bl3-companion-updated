import React from "react";

export default function handleResize(
  justifyContent,
  setJustifyContent,
  paddingLeft,
  setPaddingLeft
) {
  if (
    window.innerWidth >= 1065 &&
    paddingLeft !== "pl-4" &&
    justifyContent !== "is-justify-content-center"
  ) {
    setJustifyContent("is-justify-content-center");
    setPaddingLeft("pl-4");
    return;
  } else if (
    window.innerWidth < 1065 &&
    window.innerWidth >= 1024 &&
    justifyContent !== "is-justify-flex-start"
  ) {
    setJustifyContent("is-justify-flex-start");
    setPaddingLeft("");
    return;
  } else if (
    window.innerWidth < 1024 &&
    window.innerWidth >= 830 &&
    justifyContent !== "is-justify-content-center"
  ) {
    return setJustifyContent("is-justify-content-center");
  } else if (
    window.innerWidth < 830 &&
    justifyContent !== "is-justify-flex-start"
  ) {
    return setJustifyContent("is-justify-flex-start");
  }
}
