import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App.js";
import Register from "./Register.js";
import Login from "./Login.js"

export default function RouterPaths() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
  );
}
