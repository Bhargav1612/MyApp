import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; // Using react-icons for profile and logout icons
import '../styles/NavBar.css';
import ProfilePopup from './ProfilePopup';

const NavBar = () => {
  const navigate = useNavigate();
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleLogoutClick = () => {
    // Clear user session and navigate to the landing page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Orion</div>
      <div className="navbar-buttons">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/internships')}>Internships</button>
        <button onClick={() => navigate('/jobs')}>Explore Jobs</button>
        <button onClick={() => navigate('/ai')}>AI</button>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
      <div className="navbar-icons">
        <FaUser className="navbar-icon" onClick={handleProfileClick} />
        <FaSignOutAlt className="navbar-icon" onClick={handleLogoutClick} />
      </div>
      {showProfilePopup && <ProfilePopup onClose={handleProfileClick} />}
    </nav>
  );
};

export default NavBar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/NavBar.css';
// import ProfilePopup from './ProfilePopup';

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [showProfilePopup, setShowProfilePopup] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfilePopup(!showProfilePopup);
//   };

//   const handleLogoutClick = () => {
//     // Clear user session and navigate to the landing page
//     // Add logic here to handle user session clearing if needed
//     navigate('/');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Logo</div>
//       <div className="navbar-buttons">
//         <button onClick={() => navigate('/')}>Home</button>
//         <button onClick={() => navigate('/internships')}>Internships</button>
//         <button onClick={() => navigate('/jobs')}>Explore Jobs</button>
//         <button onClick={() => navigate('/ai')}>AI</button>
//         <button onClick={() => navigate('/about')}>About Us</button>
//       </div>
//       <div className="navbar-icons">
//         <i className="profile-icon" onClick={handleProfileClick}>Profile</i>
//         <i className="logout-icon" onClick={handleLogoutClick}>Logout</i>
//       </div>
//       {showProfilePopup && <ProfilePopup onClose={handleProfileClick} />}
//     </nav>
//   );
// };

// export default NavBar;


