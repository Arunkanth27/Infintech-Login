import React, { useState } from 'react';
import avatar from '../../images/OIP.jpg';
import '../../components/Global.css';

const Post = ({ post }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleMenuOption = (option) => {
    console.log(`${option} selected for post ID: ${post.id}`);
    setShowMenu(false);
  };

  return (
    <div className="post">
      {/* Post Header */}
      <div className="post__header">
        <img src={avatar} alt="User Avatar" className="post__avatar" />
        <div className="post__user-info">
          <a href={`/profile/${post.author.toLowerCase().replace(' ', '-')}`} className="post__author">
            {post.author}
          </a>
          <span className="post__time">{post.time}</span>
        </div>

        {/* Three Dots Menu */}
        <div className="post__menu">
          <i
            className="fas fa-ellipsis-h post__menu-icon" // Added class for styling
            onClick={toggleMenu}
          ></i>
          {showMenu && (
            <ul className="post__menu-options">
              <li onClick={() => handleMenuOption('Save')}>Save</li>
              <li onClick={() => handleMenuOption('Share')}>Share</li>
              <li onClick={() => handleMenuOption('Report')}>Report</li>
            </ul>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className="post__content">
        <h4 className="post__type">{post.type}</h4>
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post content" className="post__image" />}
      </div>

      {/* Post Actions */}
      <div className="post__actions">
        <span className="post__action"><i className="fas fa-thumbs-up"></i> Like</span>
        <span className="post__action"><i className="fas fa-comment"></i> Comment</span>
        <span className="post__action"><i className="fas fa-envelope"></i> Message</span>
      </div>
    </div>
  );
};

export default Post;
