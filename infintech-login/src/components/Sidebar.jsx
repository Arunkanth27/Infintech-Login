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
        <h2>John </h2>
        <p>Computing student</p>
      </div>
      <div className="sidebar__options">
        <p>My Jobs</p>
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
      </div>
    </div>
  );
};

export default Sidebar;
