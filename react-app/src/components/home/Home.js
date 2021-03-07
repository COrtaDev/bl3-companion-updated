import React, { useState } from "react";
import LootDropForm from "./home-subcomponents/LootDropForm";
import "../../styles/css/lootdropcard.css";

const avatarURL = "https://via.placeholder.com/128.png";

const Home = ({ user }) => {
  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [fullwidth, setFullwidth] = useState("");

  function growButton(e) {
    if (!fullwidth) {
      setFullwidth("is-fullwidth");
    } else {
      setFullwidth("");
    }
  }
  if (!user) {
    return null;
  }
  return (
    <>
      <section className={"section pt-3 pl-3 "}>
        <article className={"media"}>
          <figure className={"media-left"}>
            <p className={"image is-64x64"}>
              <img
                className={"is-rounded"}
                src={avatarURL}
                alt={avatarURL}
                crossOrigin={true.toString()}
                crossorigin
              />
            </p>
          </figure>
          <div className={"media-content"}>
            <div className={"content"}>
              <h2>Got Loot, {user.userName}?</h2>
              {showButton && (
                <div
                  className={
                    "is-flex is-justify-content-flex-end ml-6 mr-5 pl-6 pr-5"
                  }
                >
                  <button
                    id={"loot-drop-button"}
                    className={`button is-medium is-rounded ml-6 ${fullwidth}`}
                    onClick={() => {
                      setShowButton(false);
                      setShowForm(true);
                    }}
                    onMouseOver={growButton}
                    onMouseLeave={growButton}
                  >
                    Make LootDrop
                  </button>
                </div>
              )}
              {showForm && (
                <LootDropForm
                  growButton={growButton}
                  hideForm={() => {
                    setShowButton(true);
                    setShowForm(false);
                  }}
                />
              )}
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
