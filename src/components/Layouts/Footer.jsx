import React from 'react';


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-columnLogo">
        <img src='src\assets\WebLogo.png' alt="logo" className='footer-logo' />
        <p className='p-logo'>Building Zero Waste Communities, <br/>one city at a time.</p>
        <div className='Playstore-imgs'>
          <img src='src\assets\GooglePlayBlueBorder.png' alt='appleDownload' />
          <img src='src\assets\GooglePlayBlueBorder (1).png' alt='appleDownload' />
        </div>
      </div>
      <div className="footer-column">
        <h4>Services</h4>
        <ul>
          <li>Waste disposal</li>
          <li>Recycling</li>
          <li>Community Initiative</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Physical address</li>
          <li>Email address</li>
          <li>Phone Number</li>
        </ul>
        <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
      </div>
    </footer>

    <div className="footer-copy">
        <hr />
          <p>© EClean 2024, All Right Reserved.</p>
      </div>


      <footer className="sm-footer">
      <div className="sm-footer-columnLogo">
        <img src='src\assets\WebLogo.png' alt="logo" className='footer-logo' />
        <p className='sm-p-logo'>Building Zero Waste Communities, <br/>one city at a time.</p>
        
      </div>
      <div className="sm-footer-column">
        <h4>Services</h4>
        <ul>
          <li>Waste disposal</li>
          <li>Recycling</li>
          <li>Community Initiative</li>
        </ul>
      </div>
      <div className="sm-footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="sm-footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Physical address</li>
          <li>Email address</li>
          <li>Phone Number</li>
        </ul>
        <div className="sm-social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
      </div>
      <div className='sm-Playstore-imgs'>
          <img src='src\assets\GooglePlayBlueBorder.png' alt='appleDownload' />
          <img src='src\assets\GooglePlayBlueBorder (1).png' alt='appleDownload' />
        </div>
    </footer>

    <div className="sm-footer-copy">
        <hr />
          <p>© EClean 2024, All Right Reserved.</p>
      </div>
    
    </>
  );
};

export default Footer;
