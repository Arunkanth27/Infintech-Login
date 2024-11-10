import React from 'react';
import avatar from '../../images/OIP.jpg';
import '../../components/Global.css'

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <img src={avatar} alt="User Avatar" className="post__avatar" />
        <div className="post__user-info">
          <a href={`/profile/${post.author.toLowerCase().replace(' ', '-')}`} className="post__author">
            {post.author}
          </a>
          <span className="post__time">{post.time}</span>
        </div>
      </div>
      <div className="post__content">
        <h4 className="post__type">{post.type}</h4>
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post content" className="post__image" />}
      </div>
      <div className="post__actions">
        <span className="post__action"><i className="fas fa-thumbs-up"></i> Like</span>
        <span className="post__action"><i className="fas fa-comment"></i> Comment</span>
        <span className="post__action"><i className="fas fa-envelope"></i> Message</span>
      </div>
    </div>
  );
};

export default Post;
