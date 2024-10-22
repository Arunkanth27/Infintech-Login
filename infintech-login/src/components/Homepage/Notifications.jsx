// Notifications.js
import React from 'react';
import './Notifications.css';

const Notifications = () => {
  return (
    <section className="notifications">
      <h2>Notifications</h2>
      <ul>
        <li>Jane Smith mentioned you in a post.</li>
        <li>New comment on your project.</li>
        <li>You earned a "Community Helper" badge!</li>
      </ul>
    </section>
  );
};

export default Notifications;
