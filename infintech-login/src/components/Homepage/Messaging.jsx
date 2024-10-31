// Messaging.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Messaging.css';

const Messaging = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/chat'); // Navigate to the chat page on click
  };

  return (
    <div className="messaging">
      <button className="messaging__button" onClick={handleButtonClick}>
        <i className="fas fa-comments"></i> Messages
      </button>
    </div>
  );
};

export default Messaging;
