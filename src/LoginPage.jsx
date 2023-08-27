import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onRegister, loggedInUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (isNewUser) {
      onRegister(username, password);
      setIsNewUser(false); // Switch to login mode after successful registration
    } else {
      onLogin(username, password);
    }
  };

  return (
    <div className="login-form">
      {loggedInUser ? (
        <div className="welcome-message">
          <p>Welcome, {loggedInUser}!</p>
        </div>
      ) : (
        <>
          <h2>{isNewUser ? 'Register' : 'Login'}</h2>
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
          <button onClick={handleLogin}>{isNewUser ? 'Register' : 'Login'}</button>
          <p>
            {isNewUser ? 'Already registered?' : "Don't have an account yet?"}
            <span
              className="toggle-link"
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser ? 'Login' : 'Register'}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
