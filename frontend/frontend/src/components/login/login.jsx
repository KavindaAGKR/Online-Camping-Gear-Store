import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


//import { useHistory } from 'react-router-dom'; 


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/buyer/login", {
        email,
        password,

        
      });

      if (response.data) {
        
        console.log('Login successful');
        alert("successfully logged in");
        navigate('/'); 
      } else {
      
        console.error('Login failed:', response.data.message);
      }
      
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p className="signup">
        Don't have an account? <a href="/signup">Create a new account</a>
      </p>
      <p className="forgot-password-link">
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
}

export default Login;
