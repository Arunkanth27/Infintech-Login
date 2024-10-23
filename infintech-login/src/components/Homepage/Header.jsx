import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Messaging from './Messaging';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h2 className="header__logo">Tech Community</h2>
        <nav className="header__nav">
          <Link to="/feed" className="header__link">Feed</Link>
          <Link to="/communities" className="header__link">Communities</Link>
          <Link to="/activity" className="header__link">User Activity</Link>
          <Link to="/profile" className="header__link">Profile</Link>
          <Link to="/notifications" className="header__link">Notifications</Link>
        </nav>
      </div>
      <div className="header__right">
        <Messaging />
      </div>
    </header>
  );
};

export default Header;
