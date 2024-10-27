import React from 'react';
import './Feed.css';
import avatar from '../../images/OIP.jpg';

const Feed = () => {
  return (
    <section className="feed">
      <h2 className="feed__title">Welcome to Tech Community Feed</h2>

      <div className="feed__post">
        <div className="feed__profile">
          <img src= {avatar} alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <a href="/profile/john-doe" className="feed__post-author">John Doe</a>
            <span className="feed__post-time">10 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">
          Just finished a cool project using React! Check it out and let me know your thoughts.
        </p>
        <img src="/sample-post.jpg" alt="Post content" className="feed__post-image" />
        
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-star"></i> Interested</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Comment</span>
        </div>
      </div>

      <div className="feed__post">
        <div className="feed__profile">
          <img src={avatar} alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <a href="/profile/jane-smith" className="feed__post-author">Jane Smith</a>
            <span className="feed__post-time">30 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">
          Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!
        </p>
        
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-star"></i> Interested</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Comment</span>
        </div>
      </div>


      <div className="feed__post">
        <div className="feed__profile">
          <img src= {avatar} alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <a href="/profile/jane-smith" className="feed__post-author">Jane Smith</a>
            <span className="feed__post-time">30 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">
          Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!
        </p>
        
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-star"></i> Interested</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Comment</span>
        </div>
      </div>


      <div className="feed__post">
        <div className="feed__profile">
          <img src={avatar} alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <a href="/profile/jane-smith" className="feed__post-author">Jane Smith</a>
            <span className="feed__post-time">30 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">
          Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!
        </p>
        
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-star"></i> Interested</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Comment</span>
        </div>
      </div>


      <div className="feed__post">
        <div className="feed__profile">
          <img src= {avatar} alt="User Avatar" className="feed__avatar" />
          <div className="feed__user-info">
            <a href="/profile/jane-smith" className="feed__post-author">Jane Smith</a>
            <span className="feed__post-time">30 mins ago</span>
          </div>
        </div>
        <p className="feed__post-content">
          Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!
        </p>
        
        <div className="feed__post-actions">
          <span className="feed__action"><i className="fas fa-thumbs-up"></i> Like</span>
          <span className="feed__action"><i className="fas fa-star"></i> Interested</span>
          <span className="feed__action"><i className="fas fa-comment"></i> Comment</span>
        </div>
      </div>

    </section>
  );
};

export default Feed;
