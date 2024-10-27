import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <section className="feed">
      <h2 className="feed__title">Hello Folks</h2>

      <div className="feed__post">
        <div className="feed__profile">
          <img src="/default-avatar.png" alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <span className="feed__post-author">John Doe</span>
            <span className="feed__post-time">10 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">Just finished working on a cool project using React! Check it out.</p>
        <img src="/sample-post.jpg" alt="Post content" className="feed__post-image" />
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-comment"></i>Interest </span>
          <span className="feed__action"><i className="fas fa-share"></i> Answer</span>
        </div>
      </div>

      <div className="feed__post">
        <div className="feed__profile">
          <img src="/default-avatar.png" alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <span className="feed__post-author">Jane Smith</span>
            <span className="feed__post-time">30 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">Looking for collaborators on a new AI project. Anyone interested?</p>
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Interest</span>
          <span className="feed__action"><i className="fas fa-share"></i> Answer</span>
        </div>
      </div>
    </section>
  );
};

export default Feed;
