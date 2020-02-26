import React from 'react';
import './Messages.css';

import Message from './Message';

import ScrollToBottom from 'react-scroll-to-bottom';

export default function Messages({messages, name}) {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}
