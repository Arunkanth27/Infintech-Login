// Feed.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import '../../components/Global.css';

const Feed = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <section className="feed">
      <h2 className="feed__title">Welcome to the Tech Community</h2>

      <div className="feed__content">
        {/* Left Sidebar */}
        <aside className="feed__left-sidebar">
          <div className="feed__about">
            <h3>About the Community</h3>
            <p>Join the Tech Community to share your knowledge, ask questions, and collaborate on exciting projects. We welcome tech enthusiasts from all backgrounds!</p>
          </div>

          <div className="feed__announcements">
            <h3>Announcements</h3>
            <p>📅 Join us for a React workshop this weekend! Register in advance.</p>
            <p>🎉 New feature: Direct messaging! Connect with other community members easily.</p>
          </div>
        </aside>

        {/* Center Feed Section */}
        <div className="feed__main">
          <div className="feed__header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search posts..." />
              <i className="fas fa-search"></i>
            </div>
            <button className="create-post-btn" onClick={() => navigate('/create-post')}>
              <i className="fas fa-plus"></i> Create a Post
            </button>
          </div>

          <div className="feed__posts">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="feed__right-sidebar">
          <div className="feed__dashboard">
            <h3>Top Contributors</h3>
            <ul>
              <li>John Doe - 1500 points</li>
              <li>Jane Smith - 1200 points</li>
              <li>Samuel Green - 1100 points</li>
            </ul>
          </div>

          <div className="feed__stats">
            <h3>Your Stats</h3>
            <p>Posts: 25</p>
            <p>Comments: 85</p>
            <p>Reputation: 1200 points</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Feed;
