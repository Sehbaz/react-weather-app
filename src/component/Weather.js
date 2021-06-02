import "./Weather.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Weather = () => {
  return (
    <div className="main-container">
      <nav>
        <ul>
          <li>
            <Link to="/addCity">Add City</Link>
          </li>
        </ul>
      </nav>
      Hello from the weather app
    </div>
  );
};
export default Weather;
