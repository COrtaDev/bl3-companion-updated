import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// TODO: We will check to see if the user has ever been to the site using
// a variable on the database or the user table. We will develop it further
// eventually. At that point, we can elaborate here
const testerText = ["test1", "test2", "test3"];
const Tutorial = ({ modalState, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftHidden, setLeftHidden] = useState("is-hidden");
  // const [leftHidden, setLeftHidden] = useState("is-invisible");
  const [leftClickable, setLeftClickable] = useState("");
  const [rightHidden, setRightHidden] = useState("");
  const [rightClickable, setRightClickable] = useState("is-clickable");
  // const [atBeginning, setAtBeginning] = useState(true);
  // const [atEnd, setAtEnd] = useState(false);
  useEffect(() => {
    //you are at the beginning
    if (currentSlide) {
      setLeftClickable("is-clickable");
      setLeftHidden("");
    } else {
      setLeftClickable("");
      setLeftHidden("is-invisible");
    }
    //you are at the end
    if (currentSlide >= testerText.length - 1) {
      setRightClickable("");
      setRightHidden("is-hidden");
    } else {
      setRightClickable("is-clickable");
      setRightHidden("");
    }
    if (!modalState) setCurrentSlide(0);
  }, [
    currentSlide,
    leftHidden,
    rightHidden,
    // atBeginning,
    // atEnd,
    rightClickable,
  ]);

  //TODO We will recieve the user data from the parent component
  //*there should be a boolean in the JSON that indicates whether or not we
  //*should prompt the user about watching a tutorial to learn how to use the site.
  //Basically, we need to redirect here almost every single time until we
  //Finally get to a point where where are ready to begin developmentment of
  //an additional feature. This has the potential to greatly expand the scope
  //of our current update, so it is shelved and recorded here.
  //?Potentially we may need to use history so we redirect them to the correct location.
  //?That means we can POTENTIALLY render a tutorial for whatever their current location is!
  //?ALSO that means we should have a show all tutorials, which lists them all and then they can select one from there.
  //?Keeping track of history and location will be vital here for managing redirects.
  //!I want to have an image modal pop up with arrows carrets on either side
  //!each time they click a different image cycles through until we're done.
  //*not sure what this fucking garbage below me is...
  // const skipTutorial = true;
  // if (skipTutorial) return <Redirect to="/home" />;
  // return <h1>This is the tutorial</h1>;

  function prev() {
    setCurrentSlide(currentSlide - 1);
  }
  function next() {
    setCurrentSlide(currentSlide + 1);
  }
  return (
    <div className={`modal ${modalState}`}>
      <div className={"modal-background"} onClick={onClose}></div>
      <span
        className={
          "container is-flex is-justify-content-center is-align-items-center"
        }
      >
        <span id={"tutorial-back-arrow"} className={`icon`}>
          {/* <span id={"tutorial-back-arrow"} className={`icon mr-4 is-hidden`}> */}
          <FontAwesomeIcon
            className={` ${leftClickable} ${leftHidden} `}
            icon={faAngleLeft}
            size={"7x"}
            aria-hidden={true}
            onClick={prev}
          />
        </span>
        <div id={"tutorial-modal-content"} className={"modal-content mx-4"}>
          <p className={"image is-4by3 "}>
            <img
              src={`https://via.placeholder.com/640x480.png?text=${testerText[currentSlide]}`}
              alt={testerText[currentSlide]}
            />
          </p>
        </div>
        <span className={`icon`}>
          <FontAwesomeIcon
            className={` ${rightClickable} ${rightHidden}`}
            icon={faAngleRight}
            size={"7x"}
            aria-hidden={true}
            onClick={() => next()}
          />
        </span>
      </span>
      <button
        id={"modal-close-button"}
        className={"modal-close is-large"}
        aria-label={"close"}
        onClick={onClose}
      />
    </div>
  );
};

export default Tutorial;
