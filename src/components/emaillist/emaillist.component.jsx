// emaillist.component.jsx
import React from "react";
import Email from '../email/email.component'
import "./emaillist.styles.css";

const EmailList = ({ content, onEmailClick }) => (
    <div className="emaillist">
        {content.map(email => (
            <Email key={email.id} content={email} onEmailClick={onEmailClick} />
        ))}
    </div>
);

export default EmailList;
