import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="/assets/images/not-found.gif"
        alt="Page not found"
      />
      <h2 className="not-found-heading">
        404
        <br /> Nothing Found
      </h2>
      <p className="go-home">
        Go back to
        <br />
        <br />
        <Button
          className="go-home-button"
          variant="contained"
          size="large"
          color="primary"
        >
          <Link to="/" className="go-home-link">
            Home
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default NotFound;
