import React, { useState, useRef, useEffect } from 'react';
import { FiUser, FiLogOut, FiLogIn } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status on component mount and when route changes
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isUserAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();

    // Listen for storage changes (in case login/logout happens in another tab)
    window.addEventListener('storage', checkAuth);
    
    // Also check on every page focus/visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAuth();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', checkAuth);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location]); // Re-check whenever location changes

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setIsOpen(false);
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('isUserAuthenticated');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className="profile-container" ref={dropdownRef}>
      <button
        className="profile-icon"
        onClick={toggleDropdown}
        aria-label="Profile menu"
      >
        <FiUser size={20} />
      </button>

      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-menu">
            {isAuthenticated ? (
              <button
                className="profile-menu-item logout-button"
                onClick={handleLogout}
              >
                <FiLogOut size={16} />
                Logout
              </button>
            ) : (
              <button
                className="profile-menu-item login-button"
                onClick={handleLogin}
              >
                <FiLogIn size={16} />
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
