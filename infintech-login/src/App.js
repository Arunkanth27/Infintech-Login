import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Login/AuthContext';
import Header from './components/Homepage/Header';
import Sidebar from './components/Homepage/SideBar'; // Your existing Sidebar
import Feed from './components/Feed/Feed';
import PostCreation from './components/Post/PostCreationPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chat from './components/Chat/Chat';
import CommunityPage from './components/Community/CommunityPage';
import CommunityDetails from './components/Community/CommunityDetails';
import UserActivity from './components/UserActivity/UserActivity';
import ProfilePage from './components/Profile/ProfilePage';
import Notifications from './components/Notification/Notifications';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Opportunity from './components/Homepage/Opportunity';

// Import your new sidebar components
import NewsNavbar from './components/Feed/NewsNavbar';
import OverallRankers from './components/Feed/OverallRankers';

import './App.css';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation(); // Access the current route

  return (
    <>
      {/* Only show the Header and Sidebar if the user is logged in */}
      {isLoggedIn && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <div className="app__content">{children}</div>

      {/* Conditionally Render the Right Sidebars */}
      {location.pathname === '/feed' || location.pathname === '/' ? (
        <div className="app__sidebars">
          <NewsNavbar />
          <OverallRankers />
        </div>
      ) : null}
    </>
  );
};

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'Question',
      author: 'John Doe',
      content: 'Just finished a cool project using React! Check it out and let me know your thoughts.',
      image: null,
      time: '10 mins ago',
    },
    {
      id: 2,
      type: 'Collaboration',
      author: 'Jane Smith',
      content: 'Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!',
      image: null,
      time: '30 mins ago',
    },
    // Add more posts here
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the beginning of the list
  };

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/feed" element={<Feed posts={posts} />} />
        <Route path="/create-post" element={<PostCreation addNewPost={addNewPost} />} />
        <Route path="/communities" element={<CommunityPage />} />
        <Route path="/community/:name" element={<CommunityDetails />} />
        <Route path="/activity" element={<UserActivity />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/" element={<Feed posts={posts} />} />
      </Routes>
    </AppLayout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
