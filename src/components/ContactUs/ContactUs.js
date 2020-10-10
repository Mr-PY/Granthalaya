import React from "react";
import "./ContactUs.css";
import { Button, Container, TextField, Typography } from "@material-ui/core";

const ContactUs = () => {
  return (
    <Container className="contact-us-container">
      <div className="contact-us-banner">
        <Typography className="contact-us-heading" variant="h4">
          GET IN TOUCH
        </Typography>
      </div>

      <div className="contact-us-body">
        <TextField
          required
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Name can't be empty
        </Typography>
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          fullWidth
        />
        <Typography color="error" align="left">
          Email can't be empty
        </Typography>
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Your Message"
          multiline
          rows={4}
          placeholder="Got any Requests or Suggestions let us know....."
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <Button variant="contained" color="primary" fullWidth size="large">
          SUBMIT
        </Button>
      </div>
    </Container>
  );
};

export default ContactUs;
