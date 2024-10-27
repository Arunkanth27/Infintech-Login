import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Homepage/AuthContext';
import Loader from './Loader'; // Import the loader component
import './Login.css';
import logo from '../images/download.jpg';
import backgroundImage from '../images/background_pictures.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for loader
  const [message, setMessage] = useState(''); // Message for loader
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show the loader
    setMessage('Avlo thaa mudichu vitanga ponga'); // Set initial message

    // Simulate async login process
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        setMessage('Irunga Bhaaiii..');
        setTimeout(() => {
          login();
          setLoading(false); // Hide loader after login
          navigate('/'); // Redirect to homepage
        }, 2000); // Delay to show message
      } else {
        setMessage('Invalid login credentials');
        setTimeout(() => setLoading(false), 1500); // Hide loader after 1.5s
      }
    }, 1500); // Initial delay to simulate login check
  };

  return (
    <>
      {loading && <Loader message={message} />} {/* Show loader if loading */}
      
      <div className="login-container">
        <div className="login-box">
          <div className="company-logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <h2>Welcome Back!</h2>
          <p>Log Into Your Account</p>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          <div className="login-links">
            <a href="/forgot-password">FORGOT YOUR PASSWORD?</a>
            <span>Don't Have An Account? <a href="/register">SIGN UP</a></span>
          </div>
        </div>
        <div className="login-image">
          <img src={backgroundImage} alt="Background" />
        </div>
      </div>
    </>
  );
};

export default Login;
