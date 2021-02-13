import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import Home from "./views/Home";
import Details from "./views/Details";
import Checkout from "./views/Checkout";

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/comic" exact render={(props) => <Details {...props} />} />
        <Route
          path="/checkout"
          exact
          render={(props) => <Checkout {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
