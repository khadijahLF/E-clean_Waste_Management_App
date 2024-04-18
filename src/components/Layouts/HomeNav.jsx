import React from 'react';
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <>
      <header className="header">
        <div className='header-logo'>
          <img src="src\assets\headerLogo.png" alt="Eclean Logo" />
        </div>
        <div className="menu-icon">☰</div> 
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
    </>

  );
}

export default HomeNav;
