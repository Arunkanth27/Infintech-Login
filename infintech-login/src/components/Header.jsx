import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../images/download.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src= {logo}
          alt="LinkedIn Logo"
          className="header__logo"
        />
        <div className="header__search">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <Link to="/">Home</Link>
        <Link to="/network">My People</Link>
        <Link to="/jobs">Projects</Link>
        <Link to="/messages">Messaging</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/profile">Me</Link>
      </div>
    </div>
  );
};

export default Header;
