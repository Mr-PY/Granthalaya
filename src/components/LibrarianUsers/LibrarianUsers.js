import React, { useState } from "react";
import "./LibrarianUsers.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import LibrarianUserSearch from "./LibrarianUserSearch";
import LibrarianUsersTable from "./LibrarianUsersTable";

const blockToRender = (selected) => {
  if (selected === "add") {
    return <AddUser />;
  } else if (selected === "delete") {
    return <DeleteUser />;
  } else {
    return <EditUser />;
  }
};

const LibrarianUsers = () => {
  const [selected, setSelected] = useState("add");
  return (
    <div className="librarian-users">
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
          Add Users
        </Button>
        <Button
          variant={selected === "delete" ? "contained" : "outlined"}
          onClick={() => setSelected("delete")}
        >
          Delete Users
        </Button>
        <Button
          variant={selected === "edit" ? "contained" : "outlined"}
          onClick={() => setSelected("edit")}
        >
          Edit Details
        </Button>
      </ButtonGroup>
      {blockToRender(selected)}
      <LibrarianUserSearch />
      <div className="librarian-table-wrapper">
        <LibrarianUsersTable />
      </div>
    </div>
  );
};

export default LibrarianUsers;
