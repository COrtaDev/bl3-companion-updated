import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authenticate } from "./services/auth";
import LogoutButton from "./components/auth/LogoutButton";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingHeroBanner from "./components/landing/LandingHeroBanner";
import Main from "./components/main/Main";
import "../src/styles/css/mystyles.css";

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
  }, []);

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
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <LogoutButton setAuthenticated={setAuthenticated} />
          {/* I think we want to render a tutorial here someday... */}
          {/* This is but a placeholder */}
          {/* <h1>My Home Page</h1> */}
          {/* <Redirect to={"/home"} /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Main />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
