import React from "react";
import { auth } from "../firebase";
import "./ChatMessage.css";
function ChatMessage({ message, time, sender }) {
  const purl=auth.currentUser.email;
  return (
    <div
      className="chat-message"
      style={{
        alignSelf:
          sender === purl ? "flex-end" : "flex-start",

        backgroundColor:
          sender === purl ? "#dcf8c6" : "#fff",
      }}
    >
      <div className="chat-message-text">
        <p>{message}</p>
      </div>
      <div className="chat-message-date">
        <p>{new Date(time.toDate()).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ChatMessage;