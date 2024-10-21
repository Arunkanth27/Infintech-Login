import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <h2>Infintech News</h2>
      <div className="widgets__article">
        <h4>Top tech companies hiring</h4>
        <p>2 days ago · 12,400 readers</p>
      </div>
      <div className="widgets__article">
        <h4>Remote work is here to stay</h4>
        <p>3 days ago · 8,500 readers</p>
      </div>
    </div>
  );
};

export default Widgets;
