import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../Post/Post';  // Assuming you have a Post component for individual posts
import '../../components/Global.css';

const Feed = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) => {
    return post.content.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="feed">
      <h2 className="feed__title">Welcome to the Tech Community</h2>

      {/* Header Actions with Search and Create Post */}
      <div className="feed__header-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>
        <button className="create-post-btn" onClick={() => navigate('/create-post')}>
          <i className="fas fa-plus"></i> Create a Post
        </button>
      </div>

      {/* Feed Posts */}
      <div className="feed__posts">
        {filteredPosts.length === 0 ? (
          <p>No posts available matching your search.</p>
        ) : (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        )}
      </div>
    </section>
  );
};

export default Feed;
