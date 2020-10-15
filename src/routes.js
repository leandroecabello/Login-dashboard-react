import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Components/Auth";
import { firebaseAuth } from "./firebase";

const Routes = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth>
            <Dashboard />
          </Auth>
        </Route>
        <Route exact path="/login">
          <Auth nonAuthenticated={true}>
            <Login />
          </Auth>
        </Route>
        <Route exact path="*" render={() => "404 Not found!"} />
      </Switch>
    </BrowserRouter>
  ) : (
    <div>Cargando...</div>
  );
};

export default Routes;
