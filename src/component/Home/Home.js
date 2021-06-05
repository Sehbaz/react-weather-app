import { Button } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import News from "../News/News";
import WeatherData from "../Weather/WeatherData";
import AddIcon from "@material-ui/icons/Add";

import "./Home.css";
const Home = (props) => {
  const city = props.location.city;
  return (
    <div className="home-main-container">
      <div className="nav-container">
        <Link to="/details" className="nav-button">
          <Button variant="outlined">
            <AddIcon />
          </Button>
        </Link>
      </div>

      <WeatherData data={city} />
    </div>
  );
};
export default Home;
