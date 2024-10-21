import React from 'react';
import './Feed.css';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <textarea placeholder="Start a post" />
        <button>Post</button>
      </div>
      <Post
        name="John Doe"
        description="Software Engineer"
        content="Excited to start my new role at Google!"
      />
      <Post
        name="Jane Smith"
        description="Product Manager"
        content="Looking forward to the Product Summit this weekend!"
      />
    </div>
  );
};

export default Feed;
