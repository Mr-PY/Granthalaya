import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    height: "55px",
  },
}));

const EditBook = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box
        className="edit-book-box"
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
            label="Book Id"
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
            required
            id="outlined-basic"
            label="Book Name"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <TextField
            required
            id="outlined-basic"
            label="Author"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            id="filled-read-only-input"
            label="Add Image"
            defaultValue="c:/Downloads/pic.jpg"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            size="medium"
            fullWidth
          />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
            >
              Upload
            </Button>
          </label>
        </div>
        <br />
        <br />
        <div className="input-fields-arranger">
          <TextField
            required
            id="outlined-basic"
            label="Department"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <TextField
            required
            id="outlined-basic"
            label="Rack"
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
            label="Row"
            variant="outlined"
            size="medium"
            fullWidth
          />
          <TextField
            required
            id="outlined-basic"
            label="Total Units"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Book Description"
          multiline
          rows={4}
          variant="outlined"
          size="medium"
          fullWidth
        />
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

export default EditBook;
