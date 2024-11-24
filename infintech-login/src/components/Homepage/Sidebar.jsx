// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Global.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Company Logo */}
      <div className="sidebar__logo">
        <h2>COMPANY</h2>
      </div>

      {/* Navigation Links */}
      <ul className="sidebar__nav">
        <li className="sidebar__nav-item">
          <NavLink to="/feed" activeClassName="sidebar__link--active" className="sidebar__link">
            <i className="fas fa-home"></i>
            Home
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink to="/create-post" activeClassName="sidebar__link--active" className="sidebar__link">
            <i className="fas fa-edit"></i>
            Post a Query
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink to="/explore" activeClassName="sidebar__link--active" className="sidebar__link">
            <i className="fas fa-compass"></i>
            Explore
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink to="/messages" activeClassName="sidebar__link--active" className="sidebar__link">
            <i className="fas fa-envelope"></i>
            Messages
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink to="/community-feed" activeClassName="sidebar__link--active" className="sidebar__link">
            <i className="fas fa-users"></i>
            Community Feed
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink to="/courses" activeClassName="sidebar__link--active" className="sidebar__link">
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
  );
};

export default Sidebar;
