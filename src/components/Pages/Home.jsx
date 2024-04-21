
import React from 'react';
import Column from '../Layouts/Columnn';
import CenteredImageSection from '../Layouts/CenteredImageSection';
import Achievement from '../Layouts/Achievement';
import Footer from '../Layouts/Footer';
import Dispose from '../Layouts/Dispose';
import News from '../Layouts/News';
import Testimonial from '../Layouts/Testimonial';
import Revolution from '../Layouts/Revolution';
import HomeNav from '../Layouts/HomeNav';
import Hero from '../Layouts/Hero';
import Offering from '../Layouts/Offering';
import Join from '../Layouts/Join';


const Home = ({ title }) => {
  return (
  
      <>

          <HomeNav/>
          <Hero/>

          <Revolution/>

         <Offering/>
      
          <CenteredImageSection/>

          <Achievement/>

          <Join/>

          <Testimonial/>

          <News />

      <Dispose />

      <Footer />
        
      </>
  );
};

export default Home;
