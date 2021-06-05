import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import News from "../News/News";
import WeatherData from "../Weather/WeatherData";

import "./Home.css";
const Home = () => {
  return (
    <div className="home-main-container">
      <div className="nav-container">
        <Link to="/addCity" className="nav-button">
          <Button variant="outlined">ADD CITY</Button>
        </Link>
      </div>

      <WeatherData />
      <News />
    </div>
  );
};
export default Home;
