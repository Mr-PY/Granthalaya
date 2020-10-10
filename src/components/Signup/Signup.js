import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Signup = () => {
  return (
    <Container className="signup-container" maxWidth="xs">
      <Box
        className="signup-box"
        boxShadow="5"
        textAlign="center"
        padding="2em"
        mt="1em"
        borderRadius="0.5em"
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          className="logo-img"
          src={require("../../assets/logo.png")}
          alt="Logo"
        />
        <Typography color="primary" variant="h4">
          Granthalaya
        </Typography>
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Full Name can't be empty
        </Typography>
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Email can't be empty
        </Typography>
        <br />
        <TextField
          required
          id="outlined-password-input"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Password can't be empty
        </Typography>
        <br />
        <TextField
          required
          id="outlined-password-input"
          type="password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Password doesn't match
        </Typography>
        <br />
        <Button variant="contained" color="primary" fullWidth size="large">
          SIGNUP
        </Button>
        <br />
        <br />
        <Typography color="secondary">
          Have an Account?{" "}
          <Link to="/login" className="link-tag">
            Login here.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
