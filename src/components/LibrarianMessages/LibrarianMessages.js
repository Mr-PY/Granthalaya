import React from "react"
import { useSelector} from 'react-redux'
import "./LibrarianMessages.css"
import LibrarianMessagesTable from "./LibrarianMessagesTable"
import {firestoreConnect} from 'react-redux-firebase'

const LibrarianMessages = () => {
  const messages = useSelector(state => state.firestore.ordered.messages)

  return (
    <div className="librarian-messages">
      <div className="librarian-table-wrapper">
        {messages ? <LibrarianMessagesTable messages={messages}/> : <></>}
      </div>
    </div>
  )
}

export default firestoreConnect(
  [
    { collection: 'messages'}
  ]
)(LibrarianMessages)
