// email.component.jsx
import React from "react";
import './email.styles.css';

const Email = ({ content, onEmailClick }) => {
    const { id, from, address, message, subject, read, time, active } = content;

    const handleClick = () => {
        onEmailClick(id);
    };

    return (
        <div className={`email-container ${active ? 'selected' : ''} ${read === 'false' ? 'unread' : 'read'}`} onClick={handleClick}>
            <h2>{`From: ${from}`}</h2>
            <h2>{`Address: ${address}`}</h2>
            <p>{`Subject: ${subject}`}</p>
            <p>{time}</p>
        </div>
    );
};

export default Email;
