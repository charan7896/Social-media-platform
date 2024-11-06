// components/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
  const [username, setUsername] = useState('Current Username');
  const [email, setEmail] = useState('current.email@example.com');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
