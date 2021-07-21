import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./pages/home/App.js";
import Register from "./pages/register/Register.js";
import Login from "./pages/login/Login.js"
import Main from "./pages/main/Main.js"

export default function RouterPaths() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
    </Router>
  );
}
