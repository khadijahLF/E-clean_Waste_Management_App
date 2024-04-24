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
          <img src="/src/assets/mofeyin.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Mofeyintoluwa Akanbi
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/modesta.png" className='swiper-images'/>
          <div className="swiper-overlay">Modesta Uzomba
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/modupeola.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Modupeola Oladele
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/esther.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Esther Bello
          <p>Product Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/esraa.png" className='swiper-images'/>
          <div className="swiper-overlay">Esraa Beltagy
          <p>Product Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/khadijah.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Khadijah Lawal-Fowora
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
          <img src="/src/assets/winner.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Winner Onwuteaka
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/f676/38d2/0f8d46c0efc273a49a86265866d9f51f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMXskaIHHJjbUyHAX2RZ~EX0gvAVzrW5-C-YPFeZZcSinXPlP8ELWdQSOhZ2zqTGfAW417AFn1RkXMf6urEDfdzJg-4DXpM4petoS8LyGxUOyuFhtZ~khhj99HYT4v6bsuqJee~rwNw-tGWHrCEzSauSjeoRtYnAar8N~~xrpX6MCbN7ntwn0Kue8aH0JoGuis~BAWggqwXSyAglzl6iqNeCIE2yHwrBFc4S5836Hme0UEWjnca~IbyKyhhuO-94QUC4h3Giy~fOPyghAMWSRY~pSOwvgQL7FVTfD4t4pVK5ZBBvB-O8nEofyN8BqQM2SdQJhZQVbNO~Ob-QtRBQJQ__" className='swiper-images'/>
          <div className="swiper-overlay">Gift Fache
          <p>Cybersecurity expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/adetona.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Kehinde Adetona
          <p>Cybersecurity expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/aderonke.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Aderonke Obatuyi
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/adenike.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Adenike Adeoye
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/adama.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Adama	Boubacar Oumarou
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/zambe.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Zambe Arimoro
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/abigail.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Abigail Ekong
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="/src/assets/dorcas.jpeg" className='swiper-images'/>
          <div className="swiper-overlay">Dorcas Owolabi
          <p>Mobile app developer</p>
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
