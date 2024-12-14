import React from "react";
import "../../components/Global.css";

const ChatSidebar = ({ contacts, setActiveChatId, search, setSearch }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3>Discussion</h3>
      <ul className="chat-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id} onClick={() => setActiveChatId(contact.id)}>
            <img src={contact.avatar} alt={contact.name} className="avatar" />
            <div className="contact-info">
              <strong>{contact.name}</strong>
              <p>{contact.status}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="sidebar-options">
        <button>Settings</button>
        <button>Privacy</button>
        <button>Other</button>
      </div>
    </div>
  );
};

export default ChatSidebar;