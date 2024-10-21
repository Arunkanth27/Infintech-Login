import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <h2>Featured Opportunities</h2>
      <div className="widgets__item">
        <h4>Project Collaboration: AI for Healthcare</h4>
        <p>Posted by XYZ Corporation</p>
      </div>
      <div className="widgets__item">
        <h4>Job Opportunity: Full-Stack Developer</h4>
        <p>Google - Remote</p>
      </div>
    </div>
  );
};

export default Widgets;
