// CommunityPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Global.css';

const communities = [
  { name: 'React Developers', description: 'A group for all things React.js' },
  { name: 'AI Enthusiasts', description: 'Collaborate on AI and ML projects.' },
  { name: 'Web Developers', description: 'Share your web development journey.' },
  { name: 'Data Science', description: 'For all data science enthusiasts.' },
  { name: 'Mobile Developers', description: 'Discuss mobile development topics.' },
];

const CommunityPage = () => {
  const navigate = useNavigate();

  const handleCommunityClick = (name) => {
    navigate(`/community/${encodeURIComponent(name)}`);
  };

  return (
    <section className="communities">
      <h2 className="communities__title">Explore Communities</h2>
      <div className="communities__grid">
        {communities.map((community, index) => (
          <div className="community__item" key={index} onClick={() => handleCommunityClick(community.name)}>
            <h3 className="community__name">{community.name}</h3>
            <p className="community__description">{community.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPage;
