import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Login = () => {
  return (
    <div className="login-wrappper">
      <Container className="login-container" maxWidth="xs">
        <Box
          className="login-box"
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
            label="Email"
            variant="outlined"
            fullWidth
          />
          <Typography color="error" align="left">
            Invalid Email
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
          <Typography color="secondary">
            <Link to="/forgot-password" className="link-tag">
              Forgot Password?
            </Link>
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            to="/"
            component={Link}
          >
            Login
          </Button>
          <br />
          <br />
          <Typography color="secondary">
            Don't have an Account?{" "}
            <Link to="/signup" className="link-tag">
              Signup.
            </Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
