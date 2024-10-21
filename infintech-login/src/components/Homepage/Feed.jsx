import React from 'react';
import './Feed.css';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <textarea placeholder="Post something to the community..." />
        <button>Post</button>
      </div>

      <Post
        name="John Doe"
        description="Software Engineering Student"
        content="Can anyone help me with a project using React?"
      />
      <Post
        name="Jane Smith"
        description="Data Science Student"
        content="Looking for a team to collaborate on a machine learning project!"
      />
    </div>
  );
};

export default Feed;
