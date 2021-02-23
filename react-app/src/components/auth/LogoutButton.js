import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button className={"button is-primary is-fullwidth"} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
