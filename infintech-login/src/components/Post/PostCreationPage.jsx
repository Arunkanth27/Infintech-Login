import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Global.css';

const PostCreationPage = ({ addNewPost }) => {
  const [type, setType] = useState('Question');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(''); // State for tags input
  const [tagList, setTagList] = useState([]); // State to hold the tags as an array
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value); // Update tags input state
  };

  const handleAddTag = () => {
    if (tags.trim() && !tagList.includes(tags.trim())) {
      setTagList([...tagList, tags.trim()]);
      setTags(''); // Clear the input field
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTagList(tagList.filter(tag => tag !== tagToRemove));
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
        tags: tagList, // Store the tags as an array
      };
      addNewPost(newPost); // Add the new post to the list
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

        <label>Tags (comma separated):</label>
        <div className="tags-input-container">
          <input
            type="text"
            value={tags}
            onChange={handleTagsChange}
            placeholder="e.g., React, JavaScript, Collaboration"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="add-tag-btn"
            disabled={!tags.trim()}
          >
            Add Tag
          </button>
        </div>

        {/* Display Tags */}
        <div className="tags-container">
          {tagList.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
              <i
                className="fas fa-times"
                onClick={() => handleRemoveTag(tag)}
                style={{ marginLeft: '5px', cursor: 'pointer' }}
              ></i>
            </div>
          ))}
        </div>

        <button type="submit" className="post-creation__submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCreationPage;
