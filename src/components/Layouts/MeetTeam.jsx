import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



function MeetTeam(params) {
  return (
    <>
      <section className="team-container">
        <div className="team-heading">
          <h4>Who We Are</h4>
          <h3>Meet the Team</h3>
        </div>
        <div className="team-text">
          <p>
            We are a team of passionate individuals dedicated to making a
            positive impact on our communities and the planet. What unites us is
            our shared vision of a greener, more prosperous Africa, where waste
            is no longer a burden but a valuable resource waiting to be tapped.
          </p>
        </div>
        <div className="team-pictures">

        <div className="style-team">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
         
      </Swiper>  
        </div>
        </div>
      </section>
    </>
  );
}
export default MeetTeam;
