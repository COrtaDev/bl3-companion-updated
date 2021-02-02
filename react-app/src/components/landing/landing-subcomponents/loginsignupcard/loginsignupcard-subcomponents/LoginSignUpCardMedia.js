import React from 'react';
//TODO:
//need to import the LOGIN & SIGNUP forms
import CardLoginForm from './CardLoginForm';
import CardSignUpForm from './CardSignUpForm';

const LoginSignUpCardMedia = () => {
  //TODO:
  //need define the MEDIA component here...
  //needs to render the LOGIN or SIGNUP form depending on the TAB selected...
  return (
    <article className={"media"}>
      <div className={"media-content"}>
        <div className={"content"}>
          {/* Welcome back traveler! Please login to see your loot! */}
        </div>
        <CardLoginForm />
        {/* <CardSignUpForm /> */}
      </div>
    </article>
  );
}

export default LoginSignUpCardMedia;
