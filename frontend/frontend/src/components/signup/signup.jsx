import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post("y", {
        name,
        email,
        address,
        phone,
        password,
      });

      if (response.data) {
        //console.log('User registered successfully');
        //SuccessMessage("User registered successfully");
        alert("User registered successfully, Now log with your email and password");
        
        navigate('/login'); 
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert("Error: " + error.message); // Display the error message to the user
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <div className="input-container">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
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
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
      </div>
      <div className="input-container">
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
