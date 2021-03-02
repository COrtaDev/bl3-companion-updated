import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({ user, setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <button
      className={"button is-success has-text-primary is-fullwidth"}
      onClick={onLogout}
    >
      Logout {user.userName}
    </button>
  );
};

export default LogoutButton;
