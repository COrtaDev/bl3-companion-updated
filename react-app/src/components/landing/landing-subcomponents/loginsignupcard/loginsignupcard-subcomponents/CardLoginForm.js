import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../../../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const CardLoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const setDemoUser = () => {
    setEmail("demo@aa.io");
    setPassword("password");
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <form onSubmit={onLogin}>
      <div className={"field "}>
        <p className={"help is-danger"}>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </p>
        <p className={"control  has-icons-left"}>
          <input
            className={"input is-size-2-touch is-size-2-mobile"}
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={updateEmail}
          />
          <span
            className={
              "icon is-small is-size-2-touch is-size-2-mobile is-left"
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </p>
      </div>
      <div className={"field"}>
        <p className={"control has-icons-left"}>
          <input
            className={"input is-size-2-touch is-size-2-mobile"}
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={updatePassword}
          />
          <span className={"icon is-small is-size-2-touch is-size-2-mobile is-left"}>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </p>
      </div>
      <div className={"field is-grouped"}>
        <div className={"control"}>
          <button className={"button is-primary is-size-2-touch is-size-2-mobile"} onClick={setDemoUser}>
            Login With Demo User
          </button>
        </div>
        <div className={"control"}>
          <button className={"button is-link has-text-black is-size-2-touch is-size-2-mobile"} type={"submit"}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default CardLoginForm;
