// Chat.js
import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <h2>Chat with John Doe</h2>
        <button className="chat__payment-button">💸 Make a Payment</button>
      </div>
      
      <div className="chat__messages">
        {/* Display chat messages here */}
        <div className="chat__message chat__message--received">Hello, how can I help you?</div>
        <div className="chat__message chat__message--sent">Hi! I'm interested in a project collaboration.</div>
      </div>

      <div className="chat__input-container">
        <input type="text" className="chat__input" placeholder="Type a message..." />
        <button className="chat__send-button">Send</button>
      </div>

      <div className="chat__footer">
        <button className="chat__video-button">🎥 Video Call</button>
        <button className="chat__audio-button">🎧 Audio Call</button>
      </div>
    </div>
  );
};

export default Chat;
