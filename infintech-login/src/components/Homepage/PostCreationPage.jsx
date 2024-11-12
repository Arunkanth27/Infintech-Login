// PostCreation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Global.css';

const PostCreation = ({ addNewPost }) => {
  const [type, setType] = useState('Question');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      const newPost = {
        id: Date.now(),
        type,
        author: 'Current User', // Replace with dynamic user data
        content,
        image,
        time: 'Just now',
      };
      addNewPost(newPost); // Call the function to add a new post
      navigate('/feed'); // Redirect back to the feed
    }
  };

  return (
    <div className="post-creation">
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit}>
        <label>Post Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Question">Question/Query</option>
          <option value="Collaboration">Collaboration Request</option>
        </select>

        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          required
        ></textarea>

        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button type="submit" className="post-creation__submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCreation;
