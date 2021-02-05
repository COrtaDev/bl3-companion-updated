import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../../../services/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const CardSignUpForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      } else {
        setErrors(user.errors);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  if (authenticated) {
    return <Redirect to="/" />;
  };

  return (
    <form onSubmit={onSignUp}>
      <div className={"field"}>
        <p className={"help is-danger"}>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </p>
        <p className={"control has-icons-left"}>
          <input
            className={"input"}
            type={"text"}
            placeholder={"Enter Username"}
            onChange={updateUsername}
            value={username}
          />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input
            className={"input"}
            type={"email"}
            placeholder={"Email"}
            onChange={updateEmail}
            value={email}
          />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input
            className={"input"}
            type={"password"}
            placeholder={"Password"}
            onChange={updatePassword}
            value={password}
          />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input
            className={"input"}
            type={"password"}
            placeholder={"Confirm Password"}
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
          <span className={"icon is-small is-left"}>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </p>
      </div>
      <div className={"field is-grouped"}>
        <div className={"control"}>
          <button
            className={"button is-primary"}
            type={"submit"}
          >Sign Up</button>
        </div>
        <div className={"control"}>
          <button
            className={"button is-link has-text-black"}
            onClick={resetForm}
          >Reset</button>
        </div>
      </div>
    </form>
  );
}

export default CardSignUpForm;
