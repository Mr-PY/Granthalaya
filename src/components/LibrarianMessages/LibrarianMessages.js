import React, { useState } from "react";
import "./LibrarianMessages.css";
import LibrarianMessagesTable from "./LibrarianMessagesTable";
import ReplyMessage from "./ReplyMessage";

const LibrarianMessages = () => {
  const [reply, setReply] = useState(false);
  console.log(`Messages: ${reply}`);
  return (
    <div className="librarian-messages">
      {reply ? <ReplyMessage reply={reply} setReply={setReply} /> : ""}
      <div className="librarian-table-wrapper">
        <LibrarianMessagesTable reply={reply} setReply={setReply} />
      </div>
    </div>
  );
};

export default LibrarianMessages;
