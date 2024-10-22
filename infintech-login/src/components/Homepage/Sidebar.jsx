// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img src="/default-avatar.png" alt="User Avatar" />
        <h3>John Doe</h3>
        <p>Software Engineer</p>
      </div>
      <ul className="sidebar__links">
        <li><a href="/profile">My Profile</a></li>
        <li><a href="/communities">Find Communities</a></li>
        <li><a href="/activity">My Activities</a></li>
        <li><a href="/achievements">Achievements</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
