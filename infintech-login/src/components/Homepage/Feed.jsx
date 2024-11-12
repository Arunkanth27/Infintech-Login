import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import '../../components/Global.css';

const Feed = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'Question',
      author: 'John Doe',
      content: 'Just finished a cool project using React! Check it out and let me know your thoughts.',
      image: '/sample-post.jpg',
      time: '10 mins ago',
    },
    {
      id: 2,
      type: 'Collaboration',
      author: 'Jane Smith',
      content: 'Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!',
      image: null,
      time: '30 mins ago',
    },
  ]);

  return (
    <section className="feed">
      <h2 className="feed__title">Welcome to the Tech Community</h2>

      {/* Header Actions with Search and Create Post */}
      <div className="feed__header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search posts..." />
          <i className="fas fa-search"></i>
        </div>
        <button className="create-post-btn" onClick={() => navigate('/create-post')}>
          <i className="fas fa-plus"></i> Create a Post
        </button>
      </div>

      {/* Feed Posts */}
      <div className="feed__posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
