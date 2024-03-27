import React from 'react';
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="#">ABOUT US</Link>
              </li>
              <li>
                <Link to="#">LEARN</Link>
              </li>
              <Link to="!#">
                <button className="get-app-button">Get the app</button>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <div className="text-box">
        <h1>Eco-friendly Waste Solution <br />
        at Your Finger tips</h1>
        <p>Get Rid, Get Green, Go Clean!</p>
      
      </div>
    </>

  );
}

export default HomeNav;
