import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../../components/Global.css";
import logo from "../../images/download.jpg";
import backgroundImage from "../../images/background_pictures.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();
  const { login } = useAuth();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage('Verifying credentials...');

  //   const user = JSON.parse(localStorage.getItem('user'));

  //   // Check if credentials match the saved user in localStorage
  //   setTimeout(() => {
  //     if (user && user.email === email && user.password === password) {
  //       setMessage('Login successful!');
  //       setErrorMessage(''); // Clear error message
  //       login();
  //       setTimeout(() => {
  //         setLoading(false);
  //         navigate('/');
  //       }, 0);
  //     } else {
  //       setErrorMessage('Invalid credentials'); // Set error message if credentials are invalid
  //       setLoading(false);
  //     }
  //   }, 0); // Simulate login delay
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://localhost:7097/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          sessionStorage.setItem("jwt", data.message);
          console.log(data.message);
          login();
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 0);
        } else if (
          data.isSuccess === false &&
          data.message === "User credentials wrong"
        ) {
          alert("User credentials wrong");
          setLoading(false);
        } else {
          alert("Error in login");
          setLoading(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="login-container">
      {/* Fixed Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader">{message}</div>
        </div>
      )}
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
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        {/* Error message displayed below the login button */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="login-links">
          <a href="/forgot-password">FORGOT YOUR PASSWORD?</a>
          <span>
            Don't Have An Account? <a href="/register">SIGN UP</a>
          </span>
        </div>

        {/* University Sign-Up Section */}
        <div className="university-signup">
          <a href="/register-university">Sign Up with University</a>
        </div>
      </div>
      <div className="login-image">
        <img src={backgroundImage} alt="Background" />
      </div>
    </div>
  );
};

export default Login;
