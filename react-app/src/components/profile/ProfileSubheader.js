import React from "react";

let bgText = (text) => text.replaceAll(" ", "+");
bgText = "Profile Background Image";
const imgURL = `https://via.placeholder.com/640x480.png/836000?text=${bgText}`;
//enter text here:

const ProfileSubheader = () => {
  //TODO: this  component will render the user info much like we see it on twitter.
  //*The objective will be a close clone of the twitter profile page.

  return (
    <>
      <div className={"card"}>
        <div className={"card-image"}>
          <figure className={"image is-2by1"}>
            <img src={imgURL} alt={bgText}></img>
          </figure>
        </div>
        <div className={"card-content"}>
          <div className={"media"}></div>
          
        </div>
      </div>
    </>
  );
};

export default ProfileSubheader;
