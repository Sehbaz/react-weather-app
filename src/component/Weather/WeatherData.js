import "./WeatherData.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
const WeatherData = (props) => {
  const [cityTemp, setCityTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  const [weatherContainer, setWeatherContainer] = useState("none");
  const [noweatherContainer, setNoWeatherContainer] = useState("none");
  const [weatherDescription, setWeatherDescription] = useState("");

  useEffect(() => {
    if (props.data === undefined) {
      setWeatherContainer("none");
      setNoWeatherContainer("block");
    } else {
      setWeatherContainer("block");
      setNoWeatherContainer("none");
      fetch(
        "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" +
          props.data +
          "&appid=2ba0e5e8088e78c150e17a6ae4bd66b9&units=metric"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCityName(result.name);
            setCityTemp(result.main.temp);
            setWeatherDescription(result.weather[0].description);
          }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        );
    }
  }, [props.data]);

  return (
    <div className="weather-main-container">
      <div style={{ display: weatherContainer }}>
        <div className="weather-data-container">
          <span className="city-name">{cityName}</span>
          <span className="weather-desc">{weatherDescription}</span>
          <span className="temp">{cityTemp}&deg;</span>
        </div>
        <div className="next-weather-container">
          <span className="city-name">news</span>
          <ExpandMoreIcon />
        </div>
      </div>
      <div style={{ display: noweatherContainer }}>
        <div className="weather-data-container">
          <span className="city-name">
            Add your city to get current weather.
            <br />
            Still you can scroll and read top news.
          </span>
        </div>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};
export default WeatherData;
