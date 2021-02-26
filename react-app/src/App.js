import React, { useState, useEffect, useReducer } from "react";
import { generatePath } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";
import { mainRoutes } from "./services/routeconfig";

import LogoutButton from "./components/auth/LogoutButton";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingHeroBanner from "./components/landing/LandingHeroBanner";

import "../src/styles/css/mystyles.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [userPath, setUserPath] = useState("");

  useEffect(() => {
    if (userPath) return;
    (async () => {
      const user = await authenticate();

      if (!user.errors) {
        setAuthenticated(true);
        setUser({ userName: user.username, userId: user.id });
      }
      setLoaded(true);
    })();
    if (user) {
      let path = generatePath("/:username", {
        username: user.userName,
      });
      setUserPath(path);
    }
  }, [loaded, user, userPath]);

  if (!loaded) {
    return null;
  }

  function ProtectedRoutes(route) {
    return (
      <ProtectedRoute
        path={route.path}
        exact={route.exact}
        authenticated={authenticated}
        render={(props) => (
          <route.component
            {...props}
            user={user}
            main={route.main}
            logout={<LogoutButton setAuthenticated={setAuthenticated} />}
          />
        )}
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"} exact={true}>
          <LandingHeroBanner
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        {mainRoutes.map((route, i) => (
          <ProtectedRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
