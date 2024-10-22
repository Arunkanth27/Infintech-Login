// ProfilePage.js
import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <section className="profile">
      <h2>John Doe</h2>
      <p>Software Engineer | Web Developer</p>
      <div className="profile__details">
        <h3>Education</h3>
        <p>B.Sc. in Computer Science, XYZ University</p>
        
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Machine Learning</li>
        </ul>
        
        <h3>Followers: 120</h3>
        <h3>Following: 80</h3>
      </div>
    </section>
  );
};

export default ProfilePage;
