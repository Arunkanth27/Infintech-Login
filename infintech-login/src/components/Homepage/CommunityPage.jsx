import React from 'react';
import './CommunityPage.css';

const communities = [
  { name: 'React Developers', description: 'A group for all things React.js' },
  { name: 'AI Enthusiasts', description: 'Collaborate on AI and ML projects.' },
  { name: 'Web Developers', description: 'Share your web development journey.' },
  { name: 'Data Science', description: 'For all data science enthusiasts.' },
  { name: 'Mobile Developers', description: 'Discuss mobile development topics.' },
  { name: 'Cybersecurity', description: 'Stay updated on cybersecurity trends.' },
  { name: 'Blockchain Innovators', description: 'Explore blockchain technology.' },
  { name: 'UI/UX Designers', description: 'Discuss design principles and tools.' },
  { name: 'Machine Learning', description: 'Dive into ML techniques and projects.' },
  { name: 'Cloud Computing', description: 'Learn about cloud technologies.' },
  { name: 'DevOps', description: 'Automate and optimize infrastructure.' },
  { name: 'Quantum Computing', description: 'Discuss the future of quantum tech.' },
];

const CommunityPage = () => {
  return (
    <section className="communities">
      <h2 className="communities__title">Explore Communities</h2>
      <div className="communities__grid">
        {communities.map((community, index) => (
          <div className="community__item" key={index}>
            <h3 className="community__name">{community.name}</h3>
            <p className="community__description">{community.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPage;
