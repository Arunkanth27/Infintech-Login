import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <section className="feed">
      <h2 className="feed__title">Community Feed</h2>
      <div className="feed__post">
        <h3 className="feed__post-author">John Doe</h3>
        <p className="feed__post-content">Just finished working on a cool project using React! Check it out.</p>
        <span className="feed__post-time">10 mins ago</span>
      </div>
      <div className="feed__post">
        <h3 className="feed__post-author">Jane Smith</h3>
        <p className="feed__post-content">Looking for collaborators on a new AI project. Anyone interested?</p>
        <span className="feed__post-time">30 mins ago</span>
      </div>
    </section>
  );
};

export default Feed;
