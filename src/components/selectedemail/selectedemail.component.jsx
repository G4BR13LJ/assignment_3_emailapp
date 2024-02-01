// SelectedEmail.js
import React from "react";
import "./selectedemail.styles.css";

const SelectedEmail = ({ selectedEmail }) => {
  if (!selectedEmail) {
    return null;
  }

  return (
    <div className="selected-email">
      <h2>{`From: ${selectedEmail.from}`}</h2>
      <p>{`Address: ${selectedEmail.address}`}</p>
      <p>{`Time: ${selectedEmail.time}`}</p>
      <p>{`Subject: ${selectedEmail.subject}`}</p>
      <h2>{`Message:`}</h2>
      <p>{selectedEmail.message}</p>
    </div>
  );
};

export default SelectedEmail;
