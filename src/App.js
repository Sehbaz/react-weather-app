import "./App.css";
import Weather from "./component/Weather/Weather.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addCity" exact>
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
