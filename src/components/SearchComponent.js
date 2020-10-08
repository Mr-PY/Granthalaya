import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Container,
  TextField,
} from "@material-ui/core";
import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <Container className="search-container">
      <div className="search-box">
        <TextField
          className="search-field"
          id="input-with-icon-textfield"
          placeholder="Search for books, articles etc.,"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="search-text">
                <i className="fas fa-search"></i>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          color="textSecondary"
          inputProps={{ style: { color: "#ccc" } }}
          fullWidth
        />
      </div>
    </Container>
  );
};

export default SearchComponent;
