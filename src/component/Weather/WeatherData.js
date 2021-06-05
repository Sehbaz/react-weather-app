import "./WeatherData.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const WeatherData = () => {
  const loginContactRequired = "block";
  return (
    <div className="weather-main-container">
      <div className="weather-data-container">
        {/*
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
         */}
        <span className="city-name">Leicester</span>
        <span className="temp">15&deg;</span>
      </div>
      <div className="next-weather-container">
        <span>Next Day 25&deg;</span>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};
export default WeatherData;
