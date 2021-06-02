import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const InputForm = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      Hello from input form
    </div>
  );
};
export default InputForm;
