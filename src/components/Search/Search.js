import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search-container">
      <TextField
        className="search-field"
        id="outlined-basic"
        label=""
        placeholder="Search books, articles etc.,"
        variant="outlined"
        color="primary"
        size="medium"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
