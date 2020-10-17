import React, { useState } from "react";
import "./Librarian.css";
import { useSelector} from 'react-redux';
import { Redirect } from "react-router-dom";
import LibrarianUsers from "../LibrarianUsers/LibrarianUsers";
import LibrarianBooks from "../LibrarianBooks/LibrarianBooks";
import LibrarianReservations from "../LibrarianReservations/LibrarianReservations";
import LibrarianMessages from "../LibrarianMessages/LibrarianMessages";
import LibrarianNavbar from "./LibrarianNavbar";

const blockToRender = (selected) => {
  if (selected === "users") {
    return <LibrarianUsers />;
  } else if (selected === "books") {
    return <LibrarianBooks />;
  } else if(selected === 'reservations'){
    return <LibrarianReservations/>
  } else {
    return <LibrarianMessages />;
  }
};

const Librarian = () => {
  const [selected, setSelected] = useState("users");
  const profile = useSelector(state=> state.firebase.profile);
  
  if (!profile.is_admin) return <Redirect to='/not-found' /> 

  return (
    <div className="librarian-container">
      <LibrarianNavbar selected={selected} setSelected={setSelected} />
      <main className="librarian-main">{blockToRender(selected)}</main>
    </div>
  );
};

export default Librarian;
