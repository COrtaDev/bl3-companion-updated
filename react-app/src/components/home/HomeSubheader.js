import React from "react";
const avatarURL = "https://via.placeholder.com/128.png";

const HomeSubheader = () => {
  //TODO: this will be the media card and/or content that gets rendered on the "/home" route.
  return (
    <>
      <section className={"section pt-3 pl-3"}>
        <article className={"media"}>
          <figure className={"media-left"}>
            <p className={"image is-64x64"}>
              <img className={"is-rounded"} src={avatarURL} alt={avatarURL} />
            </p>
          </figure>
          <div className={"media-content"}>
            <div className={"content"}>
              <h3>Hello this is the home area...</h3>
              <div className={"card"}>
                <div className={"card-content"}>
                  <div className={"field has-addons has-addons-centered"}>
                    <div className={"control is-expanded"}>
                      <select name={"item"}>
                        <option value={"item-01"}>Item 1</option>
                        <option value={"item-02"}>Item 2</option>
                        <option value={"item-03"}>Item 3</option>
                        <option value={"item-04"}>Item 4</option>
                        <option value={"item-05"}>Item 5</option>
                        <option value={"item-06"}>Item 6</option>
                      </select>
                      <div className={"control"}>
                        <button type={"submit"} className={"button"}>
                          Choose Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default HomeSubheader;
