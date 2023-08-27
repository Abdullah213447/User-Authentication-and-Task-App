import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    // Add registration logic here (e.g., create a new user)
    // For simplicity, let's assume successful registration
    onRegister(username);
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
