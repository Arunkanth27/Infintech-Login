// src/components/Homepage/CommunityPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Global.css';

const communities = [
  { name: 'React Developers', description: 'A group for all things React.js', members: 1200, posts: 320 },
  { name: 'AI Enthusiasts', description: 'Collaborate on AI and ML projects.', members: 950, posts: 280 },
  { name: 'Web Developers', description: 'Share your web development journey.', members: 1100, posts: 310 },
  { name: 'Data Science', description: 'For all data science enthusiasts.', members: 800, posts: 200 },
  { name: 'Mobile Developers', description: 'Discuss mobile development topics.', members: 700, posts: 150 },
];

const CommunityPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  const handleCommunityClick = (name) => {
    navigate(`/community/${encodeURIComponent(name)}`);
  };

  const handleJoinCommunity = (name) => {
    setJoinedCommunities((prev) =>
      prev.includes(name) ? prev.filter((community) => community !== name) : [...prev, name]
    );
  };

  const filteredCommunities = communities
    .filter((community) => community.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      } else {
        return b.members - a.members; // Sort by popularity (members)
      }
    });

  const handleNavigateToPostCreation = () => {
    // Pass communities to the PostCreationPage
    navigate('/create-post', { state: { communities } });
  };

  return (
    <section className="communities">
      <h2 className="communities__title">Explore Communities</h2>

      {/* Search and Sort Options */}
      <div className="communities__controls">
        <input
          type="text"
          className="communities__search-bar"
          placeholder="Search communities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="communities__sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="alphabetical">Sort by Name</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
        <button
        className="create-post-btn"
        onClick={handleNavigateToPostCreation}
      >
        Create a Post
      </button>
      </div>

      <div className="communities__grid">
        {filteredCommunities.map((community, index) => (
          <div className="community__item" key={index}>
            <h3 className="community__name" onClick={() => handleCommunityClick(community.name)}>
              {community.name}
            </h3>
            <p className="community__description">{community.description}</p>
            <p className="community__stats">
              {community.members} members • {community.posts} posts
            </p>
            <button
              className="community__join-btn"
              onClick={() => handleJoinCommunity(community.name)}
            >
              {joinedCommunities.includes(community.name) ? 'Leave' : 'Join'}
            </button>
          </div>
        ))}
      </div>


    </section>
  );
};

export default CommunityPage;
