import React from "react"
import "./LibrarianUsers.css"
import LibrarianUsersTable from "./LibrarianUsersTable"


const LibrarianUsers = ({ users }) => {
  
  return (
    <div className="librarian-users">
      <div className="librarian-table-wrapper">
        <LibrarianUsersTable users={users}/>
      </div>
    </div>
  )
}

export default LibrarianUsers
