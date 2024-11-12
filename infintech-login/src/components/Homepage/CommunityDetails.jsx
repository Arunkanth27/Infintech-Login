// CommunityDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import '../../components/Global.css';

const CommunityDetails = () => {
  const { name } = useParams(); // Get community name from URL
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Welcome to the community!', time: '1 day ago' },
    { id: 2, author: 'Jane Smith', content: 'I have a question about React hooks.', time: '2 days ago' },
  ]);

  return (
    <section className="community-details">
      <h2 className="community-details__title">{name} Community</h2>

      <div className="community-details__content">
        {/* Feed Section */}
        <div className="community-details__feed">
          <h3>Community Feed</h3>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <aside className="community-details__sidebar">
          <div className="community-details__ranking">
            <h4>Top Contributors</h4>
            <ul>
              <li>John Doe - 1200 points</li>
              <li>Jane Smith - 1100 points</li>
              <li>Mary Johnson - 1050 points</li>
            </ul>
          </div>

          <div className="community-details__announcements">
            <h4>Announcements</h4>
            <p>Join our upcoming webinar on advanced React patterns!</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CommunityDetails;
