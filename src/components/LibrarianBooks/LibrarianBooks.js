import React, { useState } from "react";
import "./LibrarianBooks.css";
import AddBook from "./AddBook";
import { ButtonGroup, Button } from "@material-ui/core";
import DeleteBook from "./DeleteBook";
import EditBook from "./EditBook";
import LibrarianBookSearch from "./LibrarianBookSearch";
import LibrarianBooksTable from "./LibrarianBooksTable";

const blockToRender = (selected) => {
  if (selected === "add") {
    return <AddBook />;
  } else if (selected === "delete") {
    return <DeleteBook />;
  } else {
    return <EditBook />;
  }
};

const LibrarianBooks = () => {
  const [selected, setSelected] = useState("add");
  return (
    <div className="librarian-books">
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
        variant="outlined"
        className="librarian-btn-group"
      >
        <Button
          variant={selected === "add" ? "contained" : "outlined"}
          onClick={() => setSelected("add")}
        >
          Add Books
        </Button>
        <Button
          variant={selected === "delete" ? "contained" : "outlined"}
          onClick={() => setSelected("delete")}
        >
          Delete Books
        </Button>
        <Button
          variant={selected === "edit" ? "contained" : "outlined"}
          onClick={() => setSelected("edit")}
        >
          Edit Details
        </Button>
      </ButtonGroup>
      {blockToRender(selected)}
      <LibrarianBookSearch />
      <div className="librarian-table-wrapper">
        <LibrarianBooksTable />
      </div>
    </div>
  );
};

export default LibrarianBooks;
