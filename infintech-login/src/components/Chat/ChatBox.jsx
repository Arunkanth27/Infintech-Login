import React, { useState, useEffect } from "react";
import '../../components/Global.css';

const ChatBox = ({ activeChatId, contacts, messages, setMessages }) => {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false); // Typing indicator

  const currentContact = contacts.find((contact) => contact.id === activeChatId);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "You",
        message,
        time: new Date().toLocaleTimeString(),
        read: false, // New messages are unread initially
      };

      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[activeChatId] = [...(updatedMessages[activeChatId] || []), newMessage];
        return updatedMessages;
      });

      setMessage("");
    }
  };

  useEffect(() => {
    if (message) {
      setTyping(true);
      const timeout = setTimeout(() => setTyping(false), 1000); // Typing indicator lasts 1 second
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div className="chat-box">
      {currentContact ? (
        <>
          {/* Chat Header */}
          <div className="chat-header">
            <img src={currentContact.avatar} alt="user-avatar" className="avatar" />
            <div>
              <h3>{currentContact.name}</h3>
              <p>{currentContact.status}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="messages">
            {messages[activeChatId]?.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "You" ? "you" : "other"}`}
              >
                <p className="message-text">{msg.message}</p>
                <span className="message-time">{msg.time}</span>
                {msg.sender === "You" && (
                  <span className="message-status">{msg.read ? "Read" : "Sent"}</span>
                )}
              </div>
            ))}
            {typing && <p className="typing-indicator">User is typing...</p>}
          </div>

          {/* Message Input */}
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </div>
  );
};

export default ChatBox;
