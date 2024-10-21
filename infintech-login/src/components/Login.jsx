import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import logo from '../images/download.jpg';
import backgroundImage from '../images/background_pictures.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normally, here you'd validate the credentials against a server or API.
    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful');
      navigate('/home'); // Redirect to the homepage
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="company-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <h2>Hello Children!</h2>
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
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">FORGOT YOUR PASSWORD?</a>
          <span>
            Don't Have An Account? <a href="/Register">SIGN UP</a>
          </span>
        </div>
      </div>
      <div className="login-image">
        <img src={backgroundImage} alt="Background" />
      </div>
    </div>
  );
};

export default Login;
