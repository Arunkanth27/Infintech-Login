import React from 'react';
import './Post.css';

const Post = ({ name, description, content }) => {
  return (
    <div className="post">
      <div className="post__header">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="post__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
