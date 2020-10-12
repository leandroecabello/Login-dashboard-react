import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Components/Auth";

const Routes = () => {
  return (
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
  );
};

export default Routes;
