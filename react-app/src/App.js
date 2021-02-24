import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";
import { mainRoutes } from "./services/routeconfig";
import LogoutButton from "./components/auth/LogoutButton";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingHeroBanner from "./components/landing/LandingHeroBanner";
// import Main from "./components/main/Main";
import "../src/styles/css/mystyles.css";
// import Tutorial from "./components/tutorial/Tutorial";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const ProtectedRoutes = (route) => {
    return (
      <ProtectedRoute
        path={route.path}
        exact={route.exact}
        authenticated={authenticated}
        render={(props) => (
          <route.component
            {...props}
            logout={<LogoutButton setAuthenticated={setAuthenticated} />}
            setAuthenticated={setAuthenticated}
          />
        )}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"} exact={true}>
          <LandingHeroBanner
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        {mainRoutes.map((route, index) => (
          <ProtectedRoutes key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
