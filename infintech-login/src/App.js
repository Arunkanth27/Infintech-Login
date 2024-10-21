import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            }
          />

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
