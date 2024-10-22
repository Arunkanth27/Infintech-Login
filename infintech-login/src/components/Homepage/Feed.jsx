// Feed.js
import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <section className="feed">
      <h2>Community Feed</h2>
      <div className="feed__post">
        <h3>John Doe</h3>
        <p>Just finished working on a cool project using React! Check it out.</p>
        <span>10 mins ago</span>
      </div>
      <div className="feed__post">
        <h3>Jane Smith</h3>
        <p>Looking for collaborators on a new AI project. Anyone interested?</p>
        <span>30 mins ago</span>
      </div>
    </section>
  );
};

export default Feed;
