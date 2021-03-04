import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authenticate } from "./services/auth";

import Main from "./components/main/Main";
import LogoutButton from "./components/auth/LogoutButton";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingHeroBanner from "./components/landing/LandingHeroBanner";

import "../src/styles/css/mystyles.css";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    component: Main,
  },
  {
    path: "/comments",
    exact: true,
    component: Main,
  },
  {
    path: "/likes",
    exact: true,
    component: Main,
  },
  {
    path: "/follows",
    exact: true,
    component: Main,
  },
  {
    path: "/profile",
    exact: true,
    component: Main,
  },
];

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loaded && user) return;
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUser({ userName: user.username, userId: user.id });
      }
      setLoaded(true);
    })();
  }, [loaded, user, authenticated]);

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
            logout={
              <LogoutButton user={user} setAuthenticated={setAuthenticated} />
            }
          />
        )}
      />
    );
  }

  if (!loaded) {
    return null;
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
        {routes.map((route, i) => (
          <ProtectedRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
