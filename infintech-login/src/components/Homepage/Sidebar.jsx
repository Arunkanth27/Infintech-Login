import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img src="/default-avatar.png" alt="User Avatar" className="sidebar__avatar"/>
        <h3 className="sidebar__name">John Doe</h3>
        <p className="sidebar__title">Software Engineer</p>
      </div>
      <ul className="sidebar__links">
        <li><a href="/profile" className="sidebar__link">My Profile</a></li>
        <li><a href="/communities" className="sidebar__link">Find Communities</a></li>
        <li><a href="/activity" className="sidebar__link">My Activities</a></li>
        <li><a href="/achievements" className="sidebar__link">Achievements</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
