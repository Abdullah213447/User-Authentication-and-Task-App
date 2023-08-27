import React from 'react';
import './Sidebar.css';

function Sidebar({ username }) {
  return (
    <div className="sidebar">
      <h2>{username}'s Profile</h2>
      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Profile</li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
