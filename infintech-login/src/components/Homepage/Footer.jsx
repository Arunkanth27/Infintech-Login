import React from 'react';
import '../../components/Global.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Tech Community. All rights reserved.</p>
      <p>
        <a href="/terms" className="footer__link">Terms</a> | 
        <a href="/privacy" className="footer__link">Privacy</a>
      </p>
    </footer>
  );
};

export default Footer;
