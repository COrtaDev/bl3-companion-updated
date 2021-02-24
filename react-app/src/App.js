import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import { authenticate } from "./services/auth";
import LogoutButton from "./components/auth/LogoutButton";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingHeroBanner from "./components/landing/LandingHeroBanner";
import Main from "./components/main/Main";
import "../src/styles/css/mystyles.css";
import Tutorial from "./components/tutorial/Tutorial";

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
          <Tutorial />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Main logout={<LogoutButton setAuthenticated={setAuthenticated} />} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/comments"
          exact={true}
          authenticated={authenticated}
        >
          <Main logout={<LogoutButton setAuthenticated={setAuthenticated} />} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/likes"
          exact={true}
          authenticated={authenticated}
        >
          <Main logout={<LogoutButton setAuthenticated={setAuthenticated} />} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
