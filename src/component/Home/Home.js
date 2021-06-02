import React from "react";
import { Link } from "react-router-dom";
import News from "../News/News";
import WeatherData from "../Weather/WeatherData";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/addCity">Add City</Link>
          </li>
        </ul>
      </nav>
      Hello from home container
      <WeatherData />
      <News />
    </div>
  );
};
export default Home;
