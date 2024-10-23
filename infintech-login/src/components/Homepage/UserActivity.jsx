import React from 'react';
import './UserActivity.css';

const UserActivity = () => {
  return (
    <section className="activity">
      <h2 className="activity__title">My Achievements</h2>
      <ul className="activity__list">
        <li>Completed 5 community projects</li>
        <li>Earned "Top Contributor" badge</li>
        <li>Helped 10 users with their queries</li>
      </ul>
    </section>
  );
};

export default UserActivity;
