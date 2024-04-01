// OurServices.js
import React from 'react';
import Column from './Column';
import CenteredImageSection from './CenteredImageSection';
import Achievement from './Achievement';
import Footer from './Footer';


const OurServices = ({ title }) => {
  return (
  
      <>
          <div className="our-services">

            <div className="title-container">
              <h1>What We Are Offering</h1>
              <button className="btn">Download App</button>
            </div>

            <div className="columns-container">
            
              <Column
                imageSrc="src\assets\plastic.png"
                text="Turn your recyclables into rewards! Simply upload photos, schedule a pickup, and get paid for your contribution to a sustainable future. It's easy, convenient, and environmentally friendly"
              />
              <Column
                imageSrc="src\assets\Image 4 (1).png"
                text="Dispose of your waste responsibly with EClean. Find nearby disposal centers, drop-off points, or schedule a pickup. Let's keep our communities clean and green together."
              />
              <Column
                imageSrc="src\assets\Image 5 (1).png"
                text="Join us in making a difference! From educational workshops to cleanup drives, we're committed to fostering a culture of sustainability. Together, let's create a positive impact on our environment."
              />
            </div>
        
          </div>
      
      <CenteredImageSection/>

      <Achievement/>

      <Footer />
        
      </>
  );
};

export default OurServices;
