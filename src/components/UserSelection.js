// src/components/UserSelection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserSelection.css';

const UserSelection = () => {
  return (
    <div className="dashboard-page">
      <div className="user-selection">
        <h2 className="section-heading">Choose Your Path</h2>
        <p className="section-description">
          Whether you are a student looking for internships or a professional searching for new opportunities, we have got you covered. Select your role below to find tailored job listings and internships that suit your career goals.
        </p>
        <div className="selection-buttons">
          <Link to="/student" className="btn">Student</Link>
          <Link to="/professional" className="btn">Professional</Link>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;

