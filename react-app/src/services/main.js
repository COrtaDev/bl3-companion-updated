export const handleResize = (
  justifyContent,
  setJustifyContent,
  paddingLeft,
  setPaddingLeft
) => {
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
    window.innerWidth >= 840 &&
    justifyContent !== "is-justify-content-center"
  ) {
    return setJustifyContent("is-justify-content-center");
  } else if (
    window.innerWidth < 840 &&
    justifyContent !== "is-justify-flex-start"
  ) {
    return setJustifyContent("is-justify-flex-start");
  }
};

export const resizeIframe = () => {
  if (window.innerWidth > 1260) return;
  else if (window.innerWidth < 1260) {
    const iframeContainer = document.getElementById("iframe-container");
    setIframe(
      `${iframeContainer.clientWidth}px`,
      `${iframeContainer.clientHeight}px`
    );
  }
};
export const initializeIframe = () => {
  const iframeContainer = document.getElementById("iframe-container");
  setIframe(
    `${iframeContainer.clientWidth}px`,
    `${iframeContainer.clientHeight}px`
  );
  return `${iframeContainer.clientWidth}px`;
};
const setIframe = (width, height) => {
  const iframe = document.getElementById("discord-iframe");
  iframe.style.height = height;
  iframe.style.width = width;
};
