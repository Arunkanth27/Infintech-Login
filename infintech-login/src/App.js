import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Homepage/AuthContext';
import Header from './components/Homepage/Header';
import Feed from './components/Homepage/Feed';
import CommunityPage from './components/Homepage/CommunityPage';
import UserActivity from './components/Homepage/UserActivity';
import ProfilePage from './components/Homepage/ProfilePage';
import Notifications from './components/Homepage/Notifications';
import Footer from './components/Homepage/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Homepage/Chat'; // Import Chat component
import './App.css';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Header />
      <div className="app__body">
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/communities" element={<CommunityPage />} />
          <Route path="/activity" element={<UserActivity />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/chat" element={<PrivateRoute element={<Chat />} />} /> {/* Protected Chat Route */}
          <Route path="/" element={<Feed />} /> {/* Default to Feed */}
        </Routes>
      </div>
      <Footer />
    </>
  ) : (
    <Routes>
      {/* Public Routes for Login and Register */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Redirect to login if the user tries to access any other routes */}
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
