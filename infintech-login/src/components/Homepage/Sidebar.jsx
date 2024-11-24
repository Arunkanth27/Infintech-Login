import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Global.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     {/* Hamburger Menu Icon */}
<div className="hamburger" onClick={toggleSidebar}>
  <div className={`hamburger__line ${isSidebarOpen ? 'open' : ''}`}></div>
  <div className={`hamburger__line ${isSidebarOpen ? 'open' : ''}`}></div>
  <div className={`hamburger__line ${isSidebarOpen ? 'open' : ''}`}></div>
</div>


      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar--open' : 'sidebar--closed'}`}>

        {/* Close Button */}
        <div className="sidebar__close-btn" onClick={toggleSidebar}>
          <i className="fas fa-times"></i>
        </div>

        {/* Company Logo */}
        <div className="sidebar__logo">
       
        </div>

        {/* Navigation Links */}
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <NavLink to="/feed" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-home"></i>
              Home
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/create-post" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-edit"></i>
              Post a Query
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/explore" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-compass"></i>
              Explore
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/messages" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-envelope"></i>
              Messages
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/community-feed" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-users"></i>
              Community Feed
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/courses" activeClassName="sidebar_link--active" className="sidebar_link">
              <i className="fas fa-book"></i>
              Courses
            </NavLink>
          </li>
        </ul>

        {/* Tips Section */}
        <div className="sidebar__tips">
          <h4>Tips & Tricks</h4>
          <p>Head on over to our website to get the latest tips & tricks!</p>
          <button className="sidebar__learn-more">Learn More</button>
        </div>

        {/* User Info */}
        <div className="sidebar__user">
          <i className="fas fa-user-circle"></i>
          <span>Log Out</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;