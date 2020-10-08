import React from "react";
import BooksComponent from "../components/BooksComponent";
import NavbarComponent from "../components/NavbarComponent";
import SearchComponent from "../components/SearchComponent";

const homepage = () => {
  return (
    <>
      <NavbarComponent />
      <SearchComponent />
      <BooksComponent />
    </>
  );
};

export default homepage;
