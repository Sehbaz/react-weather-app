import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Weather.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Weather = (props) => {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const onInputCityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitForm = (event) => {
    props.history.push({
      pathname: "/",
      city,
    });
  };

  return (
    <div>
      <div className="main-container">
        <Card className={(classes.root, "card-container")}>
          <span className="card-title">Add your city</span>
          <CardContent>
            <form className="form-container" onSubmit={submitForm}>
              <TextField
                required
                id="city"
                label="City"
                variant="outlined"
                style={{ margin: "1rem 0" }}
                placeholder="Leicester"
                fullWidth
                className="inputField"
                onChange={onInputCityChangeHandler}
              />
              <Button variant="outlined" type="submit" className="form-btn">
                GO
              </Button>
            </form>
          </CardContent>{" "}
        </Card>
      </div>
    </div>
  );
};
export default Weather;
