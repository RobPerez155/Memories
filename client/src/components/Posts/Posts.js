import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts); // Here in (state) we get access to our whole redux store
  const classes = useStyles();
  console.log(posts);

  return (
    // Below we use a ternary to either display a loading wheel or a grid of data
    !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          // Below, xs refers to cell screens, it'll take up 12/12 of the screen, and sm where it'll take up 6/12 of the screen
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
