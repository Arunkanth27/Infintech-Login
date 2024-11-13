// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Homepage/AuthContext';
import Header from './components/Homepage/Header';
import Feed from './components/Homepage/Feed';
import PostCreation from './components/Homepage/PostCreationPage';
import CommunityPage from './components/Homepage/CommunityPage';
import CommunityDetails from './components/Homepage/CommunityDetails';
import UserActivity from './components/Homepage/UserActivity';
import ProfilePage from './components/Homepage/ProfilePage';
import Notifications from './components/Homepage/Notifications';
import Footer from './components/Homepage/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Homepage/Chat';
import './App.css';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  // Manage posts state in App.js to share between Feed and PostCreation
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'Question',
      author: 'John Doe',
      content: 'Just finished a cool project using React! Check it out and let me know your thoughts.',
      image: '/sample-post.jpg',
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
  ]);

  // Function to add a new post
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the beginning of the list
  };

  return isLoggedIn ? (
    <>
      <Header />
      <div className="app__body">
        <Routes>
          {/* Pass posts and addNewPost as props */}
          <Route path="/feed" element={<Feed posts={posts} />} />
          <Route path="/create-post" element={<PostCreation addNewPost={addNewPost} />} />
          <Route path="/communities" element={<CommunityPage />} />
          <Route path="/community/:name" element={<CommunityDetails />} />
          <Route path="/activity" element={<UserActivity />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
          <Route path="/" element={<Feed posts={posts} />} /> {/* Default to Feed */}
        </Routes>
      </div>
      <Footer />
    </>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
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
