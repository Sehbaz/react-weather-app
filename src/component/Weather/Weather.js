import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
  const [country, setCountry] = useState("");
  const onInputCityChangeHandler = (e) => {
    setCity(e.target.value);
  };
  const onInputCountryChangeHandler = (e) => {
    setCountry(e.target.value);
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
        <Card className={classes.root} className="card-container">
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

/*
import "./Weather.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));
const Weather = () => {
  const classes = useStyles();

  return (
    <div className="main-container">
      <nav>
        <ul>
          <li>
            <Link to="/addCity">Add City</Link>
          </li>
        </ul>
      </nav>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};
export default Weather;
*/
