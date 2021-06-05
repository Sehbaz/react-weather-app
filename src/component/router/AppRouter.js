import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Weather from "../Weather/Weather";

import WeatherData from "../Weather/WeatherData";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Weather} path="/details" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
