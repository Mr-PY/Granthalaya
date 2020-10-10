import React, { useState } from "react";
import "./Librarian.css";
import LibrarianUsers from "../LibrarianUsers/LibrarianUsers";
import LibrarianBooks from "../LibrarianBooks/LibrarianBooks";
import LibrarianMessages from "../LibrarianMessages/LibrarianMessages";
import LibrarianNavbar from "./LibrarianNavbar";

const blockToRender = (selected) => {
  if (selected === "users") {
    return <LibrarianUsers />;
  } else if (selected === "books") {
    return <LibrarianBooks />;
  } else {
    return <LibrarianMessages />;
  }
};

const Librarian = () => {
  const [selected, setSelected] = useState("users");
  return (
    <div className="librarian-container">
      <LibrarianNavbar selected={selected} setSelected={setSelected} />
      <main className="librarian-main">{blockToRender(selected)}</main>
    </div>
  );
};

export default Librarian;
