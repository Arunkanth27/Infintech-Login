import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Global.css';
import logo from '../../images/download.jpg';
import backgroundImage from '../../images/background_pictures.jpg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser)); // Store user in localStorage
    alert('Registration successful');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="company-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <h2>Create an Account</h2>
        <p>Sign up to get started</p>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button">SIGN UP</button>
        </form>
        <div className="register-links">
          <span>Already have an account? <a href="/login">LOGIN</a></span>
        </div>
      </div>
      <div className="register-image">
        <img src={backgroundImage} alt="Background Design" />
      </div>
    </div>
  );
};

export default Register;
