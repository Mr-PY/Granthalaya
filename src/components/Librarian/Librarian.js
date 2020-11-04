import React, { useState } from "react"
import "./Librarian.css"
import { useSelector} from 'react-redux'
import { Redirect } from "react-router-dom"
import LibrarianUsers from "../LibrarianUsers/LibrarianUsers"
import LibrarianBooks from "../LibrarianBooks/LibrarianBooks"
import LibrarianReservations from "../LibrarianReservations/LibrarianReservations"
import LibrarianMessages from "../LibrarianMessages/LibrarianMessages"
import LibrarianNavbar from "./LibrarianNavbar"
import { firestoreConnect } from 'react-redux-firebase'


const blockToRender = (selected, users) => {
  if (selected === "users") {
    return <LibrarianUsers users={ users }/>
  } else if (selected === "books") {
    return <LibrarianBooks />
  } else if(selected === 'reservations'){
    return <LibrarianReservations users={ users }/>
  } else {
    return <LibrarianMessages />
  }
};

const Librarian = () => {
  const [selected, setSelected] = useState("users")
  const users = useSelector(state => state.firestore.ordered.users)
  const profile = useSelector(state=> state.firebase.profile)


    // if (!profile.is_admin) return <Redirect to='/' /> 

  return (
    <div className="librarian-container">
      <LibrarianNavbar selected={selected} setSelected={setSelected} />
      {users ? <main className="librarian-main">{blockToRender(selected, users)}</main> : <></>}
    </div>
  )
}

export default firestoreConnect(
  [
    {collection: 'users'}
  ]
)(Librarian)
