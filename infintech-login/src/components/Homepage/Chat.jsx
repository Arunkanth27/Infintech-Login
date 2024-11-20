import React, { useState } from "react";


const Chat = () => {
  // Sample data for contacts and messages
  const contacts = [
    { id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Jane Smith", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Alice Johnson", avatar: "https://i.pravatar.cc/100?img=3" },
  ];

  const initialMessages = {
    1: [
      { sender: "John Doe", message: "Hello! How are you?", time: "12:00 PM" },
      { sender: "You", message: "I'm good, how about you?", time: "12:01 PM" },
    ],
    2: [
      { sender: "Jane Smith", message: "Are you free for a call?", time: "2:00 PM" },
      { sender: "You", message: "Yes, what's up?", time: "2:05 PM" },
    ],
    3: [
      { sender: "Alice Johnson", message: "Let's meet this weekend!", time: "5:00 PM" },
      { sender: "You", message: "Sounds great!", time: "5:10 PM" },
    ],
  };

  const [activeChatId, setActiveChatId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  // Function to select a chat
  const selectChat = (contactId) => {
    setActiveChatId(contactId);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "You",
        message,
        time: new Date().toLocaleTimeString(),
      };

      // Update messages for the active chat
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        updatedMessages[activeChatId] = [...updatedMessages[activeChatId], newMessage];
        return updatedMessages;
      });

      setMessage(""); // Clear message input field
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-list">
        <h3>Chats</h3>
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className={activeChatId === contact.id ? "active" : ""}
              onClick={() => selectChat(contact.id)}
            >
              <img src={contact.avatar} alt={contact.name} className="avatar" />
              <div className="contact-info">
                <strong>{contact.name}</strong>
                <p>{messages[contact.id]?.[messages[contact.id].length - 1]?.message || ""}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-box">
        {activeChatId ? (
          <>
            <div className="chat-header">
              <img
                src={contacts.find((contact) => contact.id === activeChatId).avatar}
                alt="user-avatar"
                className="avatar"
              />
              <h3>{contacts.find((contact) => contact.id === activeChatId).name}</h3>
            </div>
            <div className="messages">
              {messages[activeChatId]?.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "You" ? "message you" : "message"}
                >
                  <p className="message-text">{msg.message}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <p>Select a chat to start messaging</p>
        )}
      </div>
    </div>
  );
};

export default Chat;
