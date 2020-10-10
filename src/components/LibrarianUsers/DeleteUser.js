import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";

const DeleteUser = () => {
  return (
    <Container maxWidth="md">
      <Box
        className="delete-user-box"
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
            id="outlined-basic"
            label="User Id"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            id="filled-read-only-input"
            label="Full Name"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            size="medium"
            fullWidth
          />
          <TextField
            id="filled-read-only-input"
            label="Email"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
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
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Cancel
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default DeleteUser;
