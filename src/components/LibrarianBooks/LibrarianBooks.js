import React from "react"
import "./LibrarianBooks.css"
import { useSelector } from 'react-redux'
import LibrarianBooksTable from "./LibrarianBooksTable"
import { firestoreConnect } from 'react-redux-firebase'


const LibrarianBooks = () => {
  const books = useSelector(state=> state.firestore.ordered.books)
  
  return (
    <div className="librarian-books">
      <div className="librarian-table-wrapper">
        {books ? <LibrarianBooksTable books={books}/> : <></>}
      </div>
    </div>
  )
}

export default firestoreConnect(
  [
    {collection: 'books'}
  ]
)(LibrarianBooks)
