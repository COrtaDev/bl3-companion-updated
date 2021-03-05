import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const testerText = ["test1", "test2", "test3"];
const Tutorial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftHidden, setLeftHidden] = useState("is-hidden");
  const [leftClickable, setLeftClickable] = useState("");
  const [rightHidden, setRightHidden] = useState("");
  const [rightClickable, setRightClickable] = useState("is-clickable");
  let history = useHistory();

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
  }, [currentSlide, leftHidden, rightHidden, rightClickable]);

  function prev(e) {
    setCurrentSlide(currentSlide - 1);
  }
  function next(e) {
    setCurrentSlide(currentSlide + 1);
  }
  function closeModal(e) {
    history.go(-1);
  }
  return (
    <div className={`modal is-active`}>
      <div className={"modal-background"} onClick={closeModal}></div>
      <span
        className={
          "container is-flex is-justify-content-center is-align-items-center"
        }
      >
        <span id={"tutorial-back-arrow"} className={`icon`}>
          <FontAwesomeIcon
            className={`${leftClickable} ${leftHidden}`}
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
            className={`${rightClickable} ${rightHidden}`}
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
        onClick={closeModal}
      />
    </div>
  );
};

export default Tutorial;
