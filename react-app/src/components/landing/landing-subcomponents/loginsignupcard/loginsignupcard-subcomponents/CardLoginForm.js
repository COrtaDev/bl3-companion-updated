import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const CardLoginForm = () => {
  //TODO:
  //need to define the Login Form here, use the LoginForm in 'auth/' as reference
  return (
    <form>
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
      <div className={"field is-grouped"}>
        <div className={"control"}>
          <button className={"button is-primary"}>Login With Demo User</button>
        </div>
        <div className={"control"}>
          <button className={"button is-link"}>Login</button>
        </div>
      </div>
    </form>
  );

}

export default CardLoginForm;
