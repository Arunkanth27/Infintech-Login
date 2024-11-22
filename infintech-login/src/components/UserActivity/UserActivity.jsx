import React from 'react';
import '../../components/Global.css'

const UserActivity = () => {
  // Mock data for points and achievements
  const overallPoints = 1520;
  const badges = ["Top Contributor", "Problem Solver", "Community Leader"];
  const achievements = [
    { title: "Completed Community Project", description: "Collaborated with peers on a React project.", points: 150 },
    { title: "Top Contributor", description: "Recognized for helping 10+ users with their queries.", points: 100 },
    { title: "Active Networker", description: "Built connections with 30+ community members.", points: 80 },
    { title: "AI Project Collaboration", description: "Worked on an AI model with 5 other developers.", points: 120 },
  ];

  return (
    <section className="activity">
      <h2 className="activity__title">My Activity & Achievements</h2>
      
      {/* Overview Section */}
      <div className="activity__overview">
        <div className="overview__item">
          <div className="overview__title">Overall Points</div>
          <div className="overview__points">{overallPoints}</div>
        </div>
        
        <div className="overview__item">
          <div className="overview__title">Badges</div>
          <div className="overview__badges">
            {badges.map((badge, index) => (
              <span key={index} className="badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <h3 className="activity__subtitle">Achievements</h3>
      <ul className="activity__list">
        {achievements.map((achievement, index) => (
          <li key={index} className="activity__list-item">
            <div className="achievement__header">
              <span className="achievement__title">{achievement.title}</span>
              <span className="achievement__points">+{achievement.points} pts</span>
            </div>
            <p className="achievement__description">{achievement.description}</p>
            <span className="achievement__badge">Earned Badge</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserActivity;
