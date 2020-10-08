import React from "react";
import "./ForgotPasswordComponent.css";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const ForgotPasswordComponent = () => {
  return (
    <Container className="forgot-password-container" maxWidth="xs">
      <Box
        boxShadow="1"
        textAlign="center"
        padding="2em"
        mt="1em"
        borderRadius="0.4em"
      >
        <img
          className="logo-img"
          src={require("../assets/logo.png")}
          alt="Logo"
        />
        <Typography color="primary" variant="h4">
          Granthalaya
        </Typography>
        <br />
        <Typography color="secondary" st variant="h5">
          Forgot your password?
        </Typography>
        <br />
        <Typography color="#333" variant="body1">
          To reset password, enter your email. If your account exists, we will
          send you an email with further instructions.
        </Typography>
        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <Button variant="contained" color="primary" fullWidth size="large">
          RESET PASSWORD
        </Button>
        <br />
        <br />

        <Typography color="secondary">
          <Link to="/login" className="link-tag">
            BACK
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default ForgotPasswordComponent;
