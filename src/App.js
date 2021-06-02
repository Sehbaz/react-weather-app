import logo from "./logo.svg";
import "./App.css";
import Weather from "./component/Weather.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InputForm from "./InputForm";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Weather />
        </Route>
        <Route path="/addCity" exact>
          <InputForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
