import "./News.css";
import React, { useEffect, useState } from "react";
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
const News = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7035a2ce18004b138c9f980fe58a0f21&pageSize=5"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.articles);
          console.log(result.articles);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div className="news-main-container">
      <div>
        <p className="news-title">Top 5 Tech news</p>
      </div>
      <List className={classes.root} className="newList-container">
        {items.map((item) => (
          <ListItem alignItems="flex-start" key={item.id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={item.urlToImage} />
            </ListItemAvatar>
            <ListItemText
              primary={item.author}
              secondary={<React.Fragment>{item.title}</React.Fragment>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default News;
