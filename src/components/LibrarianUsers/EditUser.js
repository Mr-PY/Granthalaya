import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

const EditUser = () => {
  return (
    <Container maxWidth="md">
      <Box
        className="edit-user-box"
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
            label="User Id"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ height: "57px" }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            label="Full Name"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <TextField
            required
            label="Phone"
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
            label="Email"
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
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Cancel
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default EditUser;
