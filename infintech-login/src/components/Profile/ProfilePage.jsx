import React, { useState } from 'react';
import '../../components/Global.css';
import avatar from '../../images/OIP.jpg'; // Profile Avatar
import badgeIcon from '../../images/OIP.jpg'; // Badge Icon Example
import { FaPen } from 'react-icons/fa'; // Using React Icons for pen

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState({
    role: false,
    goals: false,
    passion: false,
    hobbies: false,
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  return (
    <section className="profile">
      <div className="profile__container">
        {/* Cover Image */}
        <div className="profile__cover-image">
          <div className="profile__cover-overlay"></div>
        </div>

        {/* Main Content */}
        <div className="profile__content">
          <div className="profile__left">
            {/* Profile Header */}
            <div className="profile__header">
              <div className="profile__info">
                <img src={avatar} alt="Profile" className="profile__avatar" />
                <div className="profile__text">
                  <h2 className="profile__name">John Doe</h2>
                  <p className="profile__bio">Software Engineer | Web Developer | AI Enthusiast</p>
                  <p className="profile__summary">
                    Experienced developer with a passion for building scalable web applications and engaging in community-driven projects. Always eager to learn new technologies and collaborate with others.
                  </p>
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

            {/* Personal Details */}
            <div className="profile__personal-details">
              <h3>Personal Details</h3>
              <div className="profile__details">
                <div className="profile__detail">
                  <h4>Current Role</h4>
                  {isEditing.role ? (
                    <>
                      <input type="text" defaultValue="Senior Software Engineer at ABC Corp" />
                      <button onClick={() => handleEditClick('role')} className="edit-icon"><FaPen /></button>
                    </>
                  ) : (
                    <>
                      <p>Senior Software Engineer at ABC Corp</p>
                      <button onClick={() => handleEditClick('role')} className="edit-icon"><FaPen /></button>
                    </>
                  )}
                </div>
                <div className="profile__detail">
                  <h4>Future Goals</h4>
                  {isEditing.goals ? (
                    <>
                      <input type="text" defaultValue="To become a tech lead" />
                      <button onClick={() => handleEditClick('goals')} className="edit-icon"><FaPen /></button>
                    </>
                  ) : (
                    <>
                      <p>To become a tech lead and contribute to innovative projects in AI and Web Development</p>
                      <button onClick={() => handleEditClick('goals')} className="edit-icon"><FaPen /></button>
                    </>
                  )}
                </div>
                <div className="profile__detail">
                  <h4>Passion</h4>
                  {isEditing.passion ? (
                    <>
                      <input type="text" defaultValue="Building scalable web applications, AI, open-source contributions" />
                      <button onClick={() => handleEditClick('passion')} className="edit-icon"><FaPen /></button>
                    </>
                  ) : (
                    <>
                      <p>Building scalable web applications, AI, and open-source contributions</p>
                      <button onClick={() => handleEditClick('passion')} className="edit-icon"><FaPen /></button>
                    </>
                  )}
                </div>
                <div className="profile__detail">
                  <h4>Hobbies</h4>
                  {isEditing.hobbies ? (
                    <>
                      <input type="text" defaultValue="Coding, Reading Sci-Fi Novels, Hiking, Playing Chess" />
                      <button onClick={() => handleEditClick('hobbies')} className="edit-icon"><FaPen /></button>
                    </>
                  ) : (
                    <>
                      <p>Coding, Reading Sci-Fi Novels, Hiking, Playing Chess</p>
                      <button onClick={() => handleEditClick('hobbies')} className="edit-icon"><FaPen /></button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="profile__right">
            {/* Badges & Points */}
            <div className="profile__points">
              <h3>Account Points: 1500</h3>
              <p>Total contributions, answers, and project engagements.</p>
            </div>

            <div className="profile__badges">
              <h3>Badges</h3>
              <div className="profile__badge-list">
                <img src={badgeIcon} alt="Top Contributor Badge" title="Top Contributor" className="profile__badge" />
                <img src={badgeIcon} alt="Mentor Badge" title="Mentor" className="profile__badge" />
                <img src={badgeIcon} alt="Innovator Badge" title="Innovator" className="profile__badge" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="profile__recent-activity">
              <h3>Recent Activity</h3>
              <ul className="profile__activity-list">
                <li>Participated in "React vs Vue" discussion - 2 hours ago</li>
                <li>Posted a new article on web accessibility - 5 hours ago</li>
                <li>Completed a new project on GitHub - 1 day ago</li>
                <li>Started learning Python - 3 days ago</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
