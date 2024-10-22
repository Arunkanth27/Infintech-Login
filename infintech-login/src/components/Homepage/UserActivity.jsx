// UserActivity.js
import React from 'react';
import './UserActivity.css';

const UserActivity = () => {
  return (
    <section className="activity">
      <h2>My Achievements</h2>
      <ul>
        <li>Completed 5 community projects</li>
        <li>Earned "Top Contributor" badge</li>
        <li>Helped 10 users with their queries</li>
      </ul>
    </section>
  );
};

export default UserActivity;
