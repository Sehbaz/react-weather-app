import "./News.css";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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

  const [items, setItems] = useState([]);

  const [newAPIContainer, setNewAPIContainer] = useState("none");
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7035a2ce18004b138c9f980fe58a0f21&pageSize=5"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.articles);
          if (result !== "") {
            setNewAPIContainer("block");
          } else {
            setNewAPIContainer("none");
          }
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  }, []);
  return (
    <div className="news-main-container">
      <div>
        <p className="news-title">Top 5 Tech News</p>
      </div>
      <List className={(classes.root, "newList-container")}>
        <div style={{ display: { newAPIContainer } }}></div>
        {items.map((item) => (
          <ListItem alignItems="flex-start" key={item.author}>
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
