import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage.jsx';
import TaskList from './TaskList';


function App() {
  const [users, setUsers] = useState([]);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);


 
  const handleRegister = (username, password) => {
    setUsers([...users, { username, password }]);
    setRegisteredUser(username);
  };

  const handleLogin = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <h1>User Authentication and Task App</h1>
      {loggedInUser ? (
        <TaskList
          username={loggedInUser}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
      ) : (
        <LoginPage
          onLogin={handleLogin}
          onRegister={handleRegister}
          loggedInUser={loggedInUser}
        />
      )}
    </div>

    
  );

}

export default App;
