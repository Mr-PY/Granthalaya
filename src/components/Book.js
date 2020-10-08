import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./Book.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    maxHeight: 200,
    background: "#D6EDFF",
  },
}));
const Book = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className="book-content">
        <img
          className="book-img"
          src={require("../assets/books/advanced_java.jpg")}
          alt="Advanced Java Book"
        />
        <div className="book-details">
          <Typography variant="h6" color="textSecondary" component="p">
            ADVANCED JAVA PROGRAMMING
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            by George F Luger
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Available Units: 5
          </Typography>
        </div>
      </CardContent>
      <CardActions className="book-actions">
        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          disableElevation
          to="/book-details"
          component={Link}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
