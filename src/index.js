import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </div>
  );
}

ReactDOM.render(
<BrowserRouter>
<NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>, 
  document.getElementById("root")
  );
