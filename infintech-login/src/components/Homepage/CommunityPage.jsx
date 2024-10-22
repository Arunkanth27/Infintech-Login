// CommunityPage.js
import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <section className="communities">
      <h2>Find a Community</h2>
      <div className="community__item">
        <h3>React Developers</h3>
        <p>A group for all things React.js</p>
      </div>
      <div className="community__item">
        <h3>AI Enthusiasts</h3>
        <p>Collaborate on AI and ML projects with peers.</p>
      </div>
    </section>
  );
};

export default CommunityPage;
