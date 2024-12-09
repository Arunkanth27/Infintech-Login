import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../components/Global.css';

const PostCreationPage = ({ addNewPost }) => {
  const [type, setType] = useState('Question');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(''); // State for tags input
  const [tagList, setTagList] = useState([]); // State to hold the tags as an array
  const [communities, setCommunities] = useState([]); // Communities passed from the CommunityPage
  const [filteredCommunities, setFilteredCommunities] = useState([]); // For storing suggestions based on input
  const [noMatchFound, setNoMatchFound] = useState(false); // State to track if no matching community was found
  const navigate = useNavigate();

  // Get the communities passed from the CommunityPage
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.communities) {
      setCommunities(location.state.communities);
      setFilteredCommunities(location.state.communities); // Initially set all communities as suggestions
    }
  }, [location.state]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTagsChange = (e) => {
    const value = e.target.value;
    setTags(value); // Update tags input state

    // Filter the community names based on the user input (case-insensitive)
    if (value) {
      const filtered = communities.filter(community =>
        community.name.toLowerCase().includes(value.toLowerCase()) // Case insensitive match
      );
      setFilteredCommunities(filtered);

      // If no communities match the input, set noMatchFound to true
      setNoMatchFound(filtered.length === 0);
    } else {
      setFilteredCommunities(communities); // Reset to show all if the input is empty
      setNoMatchFound(false); // Reset 'no match found'
    }
  };

  const handleAddTag = (tag) => {
    const trimmedTag = tag.trim();
    if (trimmedTag && !tagList.includes(trimmedTag)) {
      // Add the tag to the list
      setTagList([...tagList, trimmedTag]);
      setTags(''); // Clear the input field
      setFilteredCommunities(communities); // Reset suggestions after adding the tag
      setNoMatchFound(false); // Reset 'no match found'
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTagList(tagList.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content && tagList.length > 0) {
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
            onClick={() => handleAddTag(tags)}
            className="add-tag-btn"
            disabled={!tags.trim()}
          >
            Add Tag
          </button>
        </div>

        {/* Display Suggestions or "Not Found" */}
        {tags && (
          <div className="suggestions-container">
            {noMatchFound ? (
              <p className="no-match">No communities found for "{tags}"</p>
            ) : (
              <ul>
                {filteredCommunities.map((community, index) => (
                  <li
                    key={index}
                    onClick={() => handleAddTag(community.name)} // Add the community name as tag
                    className="suggestion-item"
                  >
                    {community.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

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
