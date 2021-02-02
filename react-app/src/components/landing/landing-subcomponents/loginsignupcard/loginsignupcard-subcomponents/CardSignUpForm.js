import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const CardSignUpForm = () => {
  //TODO:
  //need to define the CardSignUpForm here, use the SignUpForm in 'auth/' for reference.
  return (

    <form>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input className={"input"} type={"text"} placeholder={"Enter Username"} />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input className={"input"} type={"email"} placeholder={"Email"} />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input className={"input"} type={"password"} placeholder={"Password"} />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input className={"input"} type={"password"} placeholder={"Confirm Password"} />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </p>
      </div>
      <div className={"field is-grouped"}>
        <div className={"control"}>
          <button className={"button is-link"}>Sign Up</button>
        </div>
        <div className={"control"}>
          <button className={"button is-link is-light"}>Reset</button>
        </div>
      </div>
    </form>
  );
}

export default CardSignUpForm;
