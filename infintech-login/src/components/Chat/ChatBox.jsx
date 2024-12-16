import React, { useState } from "react";
import "../../components/Global.css";

const ChatBox = ({ activeChatId, contacts, messages, setMessages, onBack }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null); // File upload state
  const [payment, setPayment] = useState(""); // Payment input state

  const currentContact = contacts.find((contact) => contact.id === activeChatId);

  const handleSendMessage = () => {
    if (message.trim() || file || payment) {
      const newMessage = {
        sender: "You",
        message,
        time: new Date().toLocaleTimeString(),
        read: false,
        file,
        payment,
      };

      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[activeChatId] = [...(updatedMessages[activeChatId] || []), newMessage];
        return updatedMessages;
      });

      setMessage("");
      setFile(null); // Clear the file after sending
      setPayment(""); // Clear payment input after sending
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="chat-box">
      {currentContact ? (
        <>


          {/* Chat Header */}
          <div className="chat-header">
          <button className="back-button" onClick={onBack}>
          &lt;
          </button>
            <img src={currentContact.avatar} alt="user-avatar" className="avatar" />
            <div className="header-info">
              <h3>{currentContact.name}</h3>
              <p>{currentContact.status}</p>
            </div>
            <div className="call-options">
              <button className="call-btn">📞</button>
              <button className="video-call-btn">📹</button>
            </div>
          </div>

          {/* Messages */}
          <div className="messages">
            {messages[activeChatId]?.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "You" ? "you" : "other"}`}>

                <p className="message-text">{msg.message}</p>
                {msg.file && <a href={URL.createObjectURL(msg.file)} download>Download File</a>}
                {msg.payment && <p className="payment-info">Payment: {msg.payment}</p>}
                <span className="message-time">{msg.time}</span>
                {msg.sender === "You" && (
                  <div className="message-options">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <input type="file" onChange={handleFileChange} />
            <input
              type="text"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              placeholder="Enter payment amount"
            />
            <button className="send-btn" onClick={handleSendMessage}>
              ➡️
            </button>
          </div>
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </div>
  );
};

export default ChatBox;