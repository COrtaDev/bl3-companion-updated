import React from "react";
import { Redirect } from "react-router-dom";
// TODO: We will check to see if the user has ever been to the site using
// a variable on the database or the user table. We will develop it further
// eventually. At that point, we can elaborate here

const Tutorial = () => {
  //TODO We will recieve the user data from the parent component
  //*there should be a boolean in the JSON that indicates whether or not we
  //*should prompt the user about watching a tutorial to learn how to use the site.
  //Basically, we need to redirect here almost every single time until we
  //Finally get to a point where where are ready to begin developmentment of
  //an additional feature. This has the potential to greatly expand the scope
  //of our current update, so it is shelved and recorded here.
  const skipTutorial = true;
  if (skipTutorial) return <Redirect to="/home" />;
  return <h1>This is the tutorial</h1>;
};

export default Tutorial;
