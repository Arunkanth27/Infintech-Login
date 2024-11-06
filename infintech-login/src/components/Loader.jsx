import React from 'react';
import './Global.css'; // Add some styles for the loader

const Loader = ({ message }) => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="spinner" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loader;
