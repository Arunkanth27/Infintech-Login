import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import '../../components/Global.css';

const CommunityDetails = () => {
  const { name } = useParams();
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Welcome to the community!', time: '1 day ago' },
    { id: 2, author: 'Jane Smith', content: 'I have a question about React hooks.', time: '2 days ago' },
  ]);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostContent.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, author: 'You', content: newPostContent, time: 'Just now' },
      ]);
      setNewPostContent('');
    }
  };

  return (
    <section className="community-details">
      <h2 className="community-details__title">{name} Community</h2>

      <div className="community-details__content">
        {/* Left Side (About and Announcements) */}
        <div className="community-details__left">
          <div className="community-details__info">
            <h4>About This Community</h4>
            <p>
              Welcome to the {name} community! This is where members collaborate, share knowledge,
              and discuss ideas to help each other grow.
            </p>
            <ul className="community-details__list">
              <li>
                <span role="img" aria-label="Light bulb">
                  💡
                </span>{' '}
                Discuss industry insights and trends.
              </li>
              <li>
                <span role="img" aria-label="Laptop">
                  👩‍💻
                </span>{' '}
                Collaborate on exciting projects.
              </li>
              <li>
                <span role="img" aria-label="Graduation cap">
                  🎓
                </span>{' '}
                Learn and grow with fellow members.
              </li>
            </ul>
          </div>

          <div className="community-details__announcements">
            <h4>Announcements</h4>
            <div className="announcement">
              <strong>
                <span role="img" aria-label="Calendar">
                  📅
                </span>{' '}
                Event:
              </strong>{' '}
              React Patterns Webinar on Nov 30, 6 PM.
            </div>
            <div className="announcement">
              <strong>
                <span role="img" aria-label="Party popper">
                  🎉
                </span>{' '}
                Update:
              </strong>{' '}
              Dark Mode is now live for all users!
            </div>
          </div>
        </div>

        {/* Feed Section */}
        <div className="community-details__feed">
          <h3>Community Feed</h3>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}

          {/* Post Creation Form */}
          <form className="community-details__post-form" onSubmit={handlePostSubmit}>
            <textarea
              placeholder="Write something for the community..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              required
            />
            <button type="submit">Post</button>
          </form>
        </div>

        {/* Right Sidebar (Top Contributors) */}
        <aside className="community-details__right">
          <div className="community-details__ranking">
            <h4>Top Contributors</h4>
            <table className="contributors-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>1100</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mary Johnson</td>
                  <td>1050</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="community-details__invite-btn">Invite Friends</button>
        </aside>
      </div>
    </section>
  );
};

export default CommunityDetails;
