import React from "react";
import Books from "../components/Books/Books";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

const homepage = () => {
  return (
    <div className="home-page">
      <Navbar active={"home"} />
      <Search />
      <Books className="books-wrapper" />
    </div>
  );
};

export default homepage;
