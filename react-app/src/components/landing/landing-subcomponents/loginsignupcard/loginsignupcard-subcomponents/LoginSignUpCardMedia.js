import React from 'react';
import CardLoginForm from './CardLoginForm';
import CardSignUpForm from './CardSignUpForm';

const LoginSignUpCardMedia = ({ activeTab, authenticated, setAuthenticated }) => {
  if (activeTab === 'login') {
    return (
      <article className={"media"}>
        <div className={"media-content"}>
          <div className={"content has-text-centered is-size-2-touch"}>
            <h6 >Welcome back traveler!</h6>
            Please login to see your loot drops!<br></br>
            <strong >OR</strong><br></br>
            You can just use the Demo User to check things out first...
          </div>
          <CardLoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
      </article>
    );
  } else if (activeTab === 'signup') {
    return (
      <article className={"media"}>
        <div className={"media-content"}>
          <div className={"content has-text-centered"}>
            <h6 >Sign up to track you loot drops in the app!</h6>
          </div>
          <CardSignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </div>
      </article>
    );
  }

}

export default LoginSignUpCardMedia;
