// src/components/Homepage/CommunityDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import '../../components/Global.css';

const CommunityDetails = () => {
  const { name } = useParams();
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Welcome to the community!', time: '1 day ago' },
    { id: 2, author: 'Jane Smith', content: 'I have a question about React hooks.', time: '2 days ago' },
  ]);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostContent.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, author: 'You', content: newPostContent, time: 'Just now' },
      ]);
      setNewPostContent('');
    }
  };

  return (
    <section className="community-details">
      <h2 className="community-details__title">{name} Community</h2>

      <div className="community-details__content">
        {/* Left Side (About and Announcements) */}
        <div className="community-details__left">
          <div className="community-details__info">
            <h4>About This Community</h4>
            <p>
              This is the {name} community where members discuss related topics, share knowledge, and
              collaborate on projects.
            </p>
          </div>

          <div className="community-details__announcements">
            <h4>Announcements</h4>
            <p>Join our upcoming webinar on advanced React patterns!</p>
          </div>
        </div>

        {/* Feed Section */}
        <div className="community-details__feed">
          <h3>Community Feed</h3>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}

          {/* Post Creation Form */}
          <form className="community-details__post-form" onSubmit={handlePostSubmit}>
            <textarea
              placeholder="Write something..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              required
            />
            <button type="submit">Post</button>
          </form>
        </div>

        {/* Right Sidebar (Top Contributors) */}
        <aside className="community-details__right">
          <div className="community-details__ranking">
            <h4>Top Contributors</h4>
            <ul>
              <li>John Doe - 1200 points</li>
              <li>Jane Smith - 1100 points</li>
              <li>Mary Johnson - 1050 points</li>
            </ul>
          </div>
          <button className="community-details__invite-btn">Invite Friends</button>
        </aside>
      </div>
    </section>
  );
};

export default CommunityDetails;
