import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="sidebar__profilePic"
        />
        <h3>John Doe</h3>
        <p>Software Engineering Student</p>
        <div className="sidebar__links">
          <p>Monetize Skills</p>
          <p>My Projects</p>
          <p>Groups</p>
          <p>Events</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
