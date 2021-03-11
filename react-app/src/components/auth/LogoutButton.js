import React, { useState, useEffect } from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({ user, setAuthenticated }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (currentUser) return;
    setCurrentUser(user);
  }, [currentUser, user]);
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <button
      className={"button is-success has-text-primary is-fullwidth "}
      onClick={onLogout}
    >
      Logout {!currentUser ? "" : currentUser.userName}
    </button>
  );
};

export default LogoutButton;
