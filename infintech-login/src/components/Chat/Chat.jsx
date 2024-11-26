import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatBox from "./ChatBox";
import '../../components/Global.css';

const contacts = [
  { id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/100?img=1", status: "Online" },
  { id: 2, name: "Jane Smith", avatar: "https://i.pravatar.cc/100?img=2", status: "Away" },
  { id: 3, name: "Alice Johnson", avatar: "https://i.pravatar.cc/100?img=3", status: "Offline" },
];

const initialMessages = {
  1: [
    { sender: "John Doe", message: "Hello! How are you?", time: "12:00 PM", read: true },
    { sender: "You", message: "I'm good, how about you?", time: "12:01 PM", read: true },
  ],
  2: [
    { sender: "Jane Smith", message: "Are you free for a call?", time: "2:00 PM", read: false },
    { sender: "You", message: "Yes, what's up?", time: "2:05 PM", read: true },
  ],
};

const Chat = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");

  return (
    <div className="chat-container">
      <ChatSidebar
        contacts={contacts}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        search={search}
        setSearch={setSearch}
      />
      <ChatBox
        activeChatId={activeChatId}
        contacts={contacts}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

export default Chat;
