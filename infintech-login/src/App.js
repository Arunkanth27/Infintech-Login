// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Adjusted imports to reflect the new folder structure
import Header from './components/Homepage/Header';
import Sidebar from './components/Homepage/Sidebar';
import Feed from './components/Homepage/Feed';
import CommunityPage from './components/Homepage/CommunityPage';
import UserActivity from './components/Homepage/UserActivity';
import ProfilePage from './components/Homepage/ProfilePage';
import Notifications from './components/Homepage/Notifications';
import Footer from './components/Homepage/Footer';
import './App.css';  // Assuming your global styles are in App.css

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/communities" element={<CommunityPage />} />
            <Route path="/activity" element={<UserActivity />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/" element={<Feed />} /> {/* Default to Feed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
