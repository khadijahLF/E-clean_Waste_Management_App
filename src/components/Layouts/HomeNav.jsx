import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className='header-logo'>
          <img src="src\assets\headerLogo.png" alt="Eclean Logo" />
        </div>
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/services" >Services</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <Link to="!#">
                <button className="get-app-button">Get the app</button>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <header className='sm-header'>
        <img src="src\assets\headerLogo.png" alt="Eclean Logo" />
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        {isMenuOpen && (
          <nav className="sm-nav">
            <button className="close-menu" onClick={toggleMenu}>
              <span className="close-icon">×</span>
            </button>
            <ul>
              <li>
                <Link to="/" className="active">Home</Link>
              </li>
              <li>
                <Link to="/services" className="active">Services</Link>
              </li>
              <li>
                <Link to="/aboutus" className="active">About Us</Link>
              </li>
              <li>
                <Link to="/resources" className="active">Resources</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default HomeNav;
