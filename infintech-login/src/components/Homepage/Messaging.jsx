// Messaging.js
import React from 'react';
import './Messaging.css';

const Messaging = () => {
  return (
    <div className="messaging">
      <button className="messaging__button">
        <i className="fas fa-comments"></i> Messages
      </button>
      <div className="messaging__badge">3</div> {/* Example badge for 3 new messages */}
    </div>
  );
};

export default Messaging;
