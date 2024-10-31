import React from 'react';
import './ProfilePage.css';
import coverPhoto from  '../../images/OIP.jpg'; // Background Picture
import avatar from '../../images/OIP.jpg';
import badgeIcon from '../../images/OIP.jpg'; // Badge Icon Example

const ProfilePage = () => {
  return (
    <section className="profile">
      {/* Cover and Profile Info */}
      <div className="profile__header">
        <img src={coverPhoto} alt="Cover" className="profile__cover" />
        <div className="profile__info">
          <img src={avatar} alt="Profile" className="profile__avatar" />
          <div className="profile__text">
            <h2 className="profile__name">John Doe</h2>
            <p className="profile__bio">Software Engineer | Web Developer | AI Enthusiast</p>
            <p className="profile__summary">Experienced developer with a passion for building scalable web applications and engaging in community-driven projects. Always eager to learn new technologies and collaborate with others.</p>
            <div className="profile__stats">
              <div className="profile__stat">
                <h3>120</h3>
                <span>Followers</span>
              </div>
              <div className="profile__stat">
                <h3>80</h3>
                <span>Following</span>
              </div>
              <div className="profile__stat">
                <h3>350</h3>
                <span>Attractions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="profile__personal-details">
        <h3>Personal Details</h3>
        <div className="profile__details">
          <div className="profile__detail">
            <h4>Current Role</h4>
            <p>Senior Software Engineer at ABC Corp</p>
          </div>
          <div className="profile__detail">
            <h4>Future Goals</h4>
            <p>To become a tech lead and contribute to innovative projects in AI and Web Development</p>
          </div>
          <div className="profile__detail">
            <h4>Passion</h4>
            <p>Building scalable web applications, AI, and open-source contributions</p>
          </div>
          <div className="profile__detail">
            <h4>Hobbies</h4>
            <p>Coding, Reading Sci-Fi Novels, Hiking, Playing Chess</p>
          </div>
          <div className="profile__detail">
            <h4>Inspiration</h4>
            <p>Inspired by tech innovators like Elon Musk and Ada Lovelace</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile__content">
        {/* Points and Achievements */}
        <div className="profile__points">
          <h3>Account Points: 1500</h3>
          <p>Total contributions, answers, and project engagements.</p>
        </div>
        
        <div className="profile__badges">
          <h3>Badges</h3>
          <div className="profile__badge-list">
            <img src={badgeIcon} alt="Top Contributor Badge" title="Top Contributor" className="profile__badge" />
            <img src={badgeIcon} alt="Mentor Badge" title="Mentor" className="profile__badge" />
            <img src={badgeIcon} alt="Community Helper Badge" title="Community Helper" className="profile__badge" />
            {/* Add more badges as needed */}
          </div>
        </div>

        {/* About Section */}
        <div className="profile__section">
          <h3>About</h3>
          <p>B.Sc. in Computer Science from XYZ University. Passionate about web development, machine learning, and building meaningful tech solutions.</p>
        </div>

        {/* Skills */}
        <div className="profile__section">
          <h3>Skills</h3>
          <ul className="profile__skills">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Machine Learning</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="profile__section">
          <h3>Experience</h3>
          <ul className="profile__experience">
            <li>Frontend Developer at ABC Corp</li>
            <li>Backend Intern at XYZ Ltd</li>
          </ul>
        </div>

        {/* Recent Attractions */}
        <div className="profile__section">
          <h3>Recent Attractions</h3>
          <p>Featured in the top 5 contributors of the month. Participated in a community coding competition and won 1st place.</p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
