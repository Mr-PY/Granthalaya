import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddUser = () => {
  return (
    <Container maxWidth="md">
      <Box
        className="add-user-box"
        boxShadow="5"
        textAlign="center"
        padding="2em"
        mt="1em"
        mb="1em"
        borderRadius="0.5em"
        style={{ backgroundColor: "#efefef" }}
      >
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <TextField
            required
            id="outlined-basic"
            label="Phone"
            type="tel"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>
        <br />
        <br />
        <div className="button-input-fields-arranger">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Clear
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default AddUser;
