import React from "react";
import Book from "./Book";
import "./BooksComponent.css";

const BooksComponent = () => {
  return (
    <div className="books-component">
      <div className="books-container">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default BooksComponent;
