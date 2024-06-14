// src/components/ProfilePopup.js
import React from 'react';
import '../styles/ProfilePopup.css';

const ProfilePopup = ({ onClose }) => {
  return (
    <div className="profile-popup">
      <div className="profile-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="popup-heading">Welcome to Orion!</h2>
        <p className="popup-description">
          Discover exciting opportunities tailored just for you. Explore internships, jobs, and connect with industry leaders. 
          Start your journey with Orion today!
        </p>
      </div>
    </div>
  );
};

export default ProfilePopup;

