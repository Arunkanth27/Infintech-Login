import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // This state simulates whether the user is logged in or not
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Show the Login page by default */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />

          {/* Redirect to home if logged in, otherwise go to login */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            }
          />

          {/* Protect the Home route */}
          <Route
            path="/home"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
