import "./WeatherData.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
const WeatherData = (props) => {
  const [cityTemp, setCityTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  const [weatherContainer, setWeatherContainer] = useState("none");
  const [noweatherContainer, setNoWeatherContainer] = useState("none");
  useEffect(() => {
    if (props.data === undefined) {
      setWeatherContainer("none");
      setNoWeatherContainer("block");
    } else {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          props.data +
          "&appid=2ba0e5e8088e78c150e17a6ae4bd66b9&units=metric"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCityName(result.name);
            setCityTemp(result.main.temp);
          }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        );
      setWeatherContainer("block");
      setNoWeatherContainer("none");
    }
  });
  return (
    <div className="weather-main-container">
      <div style={{ display: weatherContainer }}>
        <div className="weather-data-container">
          <span className="city-name">{cityName}</span>
          <span className="temp">{cityTemp}&deg;</span>
        </div>
        <div className="next-weather-container">
          <span>Next Day 25&deg;</span>
          <ExpandMoreIcon />
        </div>
      </div>
      <div style={{ display: noweatherContainer }}>
        <div className="weather-data-container">
          <span className="city-name">
            Add your city to get current weather
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeatherData;
{
  /*
        <div className="weather-img">
          <span
            style={{ display: loginContactRequired }}
            className="dot"
          ></span>
          <span
            style={{ display: loginContactRequired }}
            className="dot"
          ></span>
       
         
        </div>
         */
}
