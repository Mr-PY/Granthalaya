import React from "react";
import "./Search.css";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme=>({
  input: {
    color: "#ffffff",
    border: "1px transparent",
    fontSize: "1em",
    [theme.breakpoints.up('md')]:{
      fontSize: "1.2em"
    }
  },
}));


const Search = (props) => {
  const {search, setSearch} = props
  const classes = useStyles(props);
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <TextField
          autoFocus
          className= 'search-field'
          placeholder="Search books, articles etc.,"
          variant="outlined"
          color="primary"
          size="medium"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          InputProps={{
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Search;
