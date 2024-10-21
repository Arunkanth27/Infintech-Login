import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="/images/download.jpg"
          alt="Platform Logo"
          className="header__logo"
        />
        <input type="text" placeholder="Search for projects, jobs, or people" className="header__search" />
      </div>

      <div className="header__right">
        <Link to="/projects">Community</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/network">My Network</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
