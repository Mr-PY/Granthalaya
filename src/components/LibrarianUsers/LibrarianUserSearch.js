import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const LibrarianUserSearch = () => {
  return (
    <div className="librarian-search">
      <TextField  
        label="Search User"
        variant="outlined"
        style={{ width: 500 }}
        size="medium"
        fullWidth
      />
      <Button
        className="search-btn"
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  );
};

export default LibrarianUserSearch;
