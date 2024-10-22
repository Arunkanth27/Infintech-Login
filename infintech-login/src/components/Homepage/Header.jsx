// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Messaging from './Messaging';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h2>Tech Community</h2>
        <nav>
          <Link to="/feed">Feed</Link>
          <Link to="/communities">Communities</Link>
          <Link to="/activity">User Activity</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>
      </div>
      <div className="header__right">
        <Messaging />
      </div>
    </header>
  );
};

export default Header;
