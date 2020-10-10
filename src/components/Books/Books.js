import React from "react";
import "./Books.css";
import Book from "../Book/Book";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
}));

const Books = () => {
  const classes = useStyles();
  return (
    <>
      <div className="books-component"></div>
      <div className="books-container">
        <Grid
          container
          className={classes.root}
          alignItems="center"
          justify="space-evenly"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Book />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Books;
