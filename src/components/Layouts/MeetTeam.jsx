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
          <img src="https://s3-alpha-sig.figma.com/img/b744/979b/13e0629eccacde1d90d656053af49db9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGwGgL7D-fsTEXtJ0r~kPoJ6mvj8OVub02eaEqtZWnQd5Ua5CptwdrJ7LXNQb2Qtw1nt7UscFuMwGSA7Mp2LK6I4vXc1IDtpLMeMmNgwc8-nxeg3oxYmxekKkJjC3Z-I15SnnzQBhMRuX-7PAUaAiju0Goo~O0HEKoedGl4ZRtbnciqHlB2zBez8LeCDAMBkCf-BuMUJo6vo4YfQP3NGSw9Xby6X4KK5t6YE9hdI8idQ0rHG-1gHUnFNF1SPpaTfSoTTGj4YtpfcZVNq27iGnYTV9yTxgsJ93JStVxNmhdaBfWWEvetSyHtjm94QDe2tux4O3gG-uppwVyH8wsnG0g__" className='swiper-images'/>
          <div className="swiper-overlay">Mofeyintoluwa Akanbi
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/dc06/de04/04d1d30f385774f7ba496099a5f60cd9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nC6nayMj0BBJZ5kGRVqWqF4J6yWK5BTDHHG0objQrzFHSp3bDUnNn4E1AYU5sm0Bz6YcQ6scBcN8rLl073OjbHu6NzBWC9T1jWuXwRqMdnWpajaN5LKNlqjLk4o3urUIC9-HGgBqwmvKpw0TjLK5gs8RLKEdVsy86lS8a9-vSxIW26sPNigMU1xA1jidkOEEv-PhLGM1A8tahKRpCjlPyq07uYGKS8i0E~uCnlWW4~n-NaNqlYBdGTwU-piTND9UBASm3LfwnxCleDKXKMZlwej1YdXUQlGHlD2vwovXmUlkMBTUPwd5~MuBTFo2m7g4cOgyRm1FRL8EtGYYqHHymg__" className='swiper-images'/>
          <div className="swiper-overlay">Modesta Uzomba
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/5931/c560/4ffbe0c531dcda491eec89ae1fa0f562?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZ15B9CrJxgDE~Mg4J8O6jD~E-peXMi-xXSpcqrjgJf5swL7jsh0GqZezude~EGOAlNaToPELUoX1DmeP0qkGKEyBKfRRuOVr~w83BwNUT4HmICgNAPQLhcJ5nAtbysGqvsmFYswzFOkARP~79B5a~yxjE57f~1l5eRHKRsd4R8uoJs6hFvYwO6jrYQ1vDGurGmVzCEnu8Zkd~TkAIzSvlQM-Xx9i1H0TzRiKWzZPXMEkLRK7AJtjXyuZclAj10v~J5NYeTLp29MR8IXOiqw1wFVbgNS6r035TLnfPEbiDZ6Z-R9vlIs4YGRZ6XvZq-2q~XhOqLlzuwM0Gg8VUOpFw__" className='swiper-images'/>
          <div className="swiper-overlay">Modupeola Oladele
          <p>Product Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/1cdd/4423/13ff464b7fe57dfff87e3738d8960f92?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfsp-3Mjadso1~NJ2lOIitEJ4hTPIYSaeAVv~hiT0Gu7ItnnMAB6MbUSSmMvD7YPz~sKeQ4gixFeABQyldN0GBVpH9zw8T75RgDRcbjiKw6SzBvEmulAlKPZXeuK0nqeppwwCTHd9fugL~NDmNIWG32RU9JxgKgg~og7GSnPE7WJbOLPTHUH~yyq-b5WSxQ-a8SegUjr~uYVvhdJCKYlPDlcWiHycHfUelZBzonf3Cx7SviLHkFY17c9muBFE1k4O49BcoLdkM90UuAV9ZYkeoYxr6WLgRupSLAFKIfYsJorah-MOjERrnlttw8-rDIgWA~DckbvAm0QH8PGSWTGkA__" className='swiper-images'/>
          <div className="swiper-overlay">Esther Bello
          <p>Product Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/9dfb/79f7/6b94850d72bb3b504d8fbf063b173ccb?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTozDYopaSxFJuQJ-6gxdgBoPItxfsxE28Zspf7pnVym5EtvNpa~NBkcv55R4vb9jZSTPOfLS6-QK3525Pfh7kF7bRcCYHidVDW9toJQNr1~PgkmZ7gMD27JVynrHvodLOYtUpSH2bJ-HrhXNtpYMjjrVnOl8gCiseJaka-Ro21diwd9~mnGpHRd-371F5pEA8eH3ahCrSKIckZt82Ih1wr1RNylUws993Kc-lGs2PehefBt~MU3HLYWRiXXfxlWLsZEPxGxhOJk4vkAYlND-AFa8QKW3FBFvzY0uUY1mQTTKyngu~5ubhcxxkIPYRg2VA7AZY4G27R1JOXA33H3Tw__" className='swiper-images'/>
          <div className="swiper-overlay">Esraa Beltagy
          <p>Product Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/0cfa/c5be/46fad0c11e9f49b9872e11895dfd6a57?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NNXLkO-PGiUeD6TGrJjIxJMVRN13rASPDKo1qlhPfL8Pidjoc8YS98B0tLZYJSSaTtaicr1xL5Z~ICZY31AKVoDzuWeREDOsdYRZOIINHbvy05Mh3PTjhtwI2DZkjJq8hxoWJ~FfABm47BsWFf6CpBrpnKd075en78fFKXPfHmwmDiULIM4n5pRLpQ1~HEorh9czS~K96~mpIQMkOY2PSUOUEWw1TRemVy4bmcXqz0DvJfAaQMNLEmi4UvmwczxIzaiD5RMO1voT-kBaQv4z8Kn5BzFrWPWyOTTeiGXjXX2hTIOk99qE4UOTzX7WZ5zO6tIlQGQ-Uu~mm-bcE452ZQ__" className='swiper-images'/>
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
          <img src="https://s3-alpha-sig.figma.com/img/de92/79d3/807d8d4e01d2c5403bfd3df758f72da8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FFjMxhVH7LguqbKYmo3Q8Xzc7CPhbzac5I~sz0-FfjE33JufA2gXQS4uUnwLF453H8N5NTseSSgdm2b9WrlVKpOYC9JnogtT7D~8a7mDZ8P807ZnyK70R2-8MXprTdgeU0RM1Qg9rRwHTtOmjVw0HL8~4WRdj~IM0IqorHpsV5nCruVcPvkaFVQcUIvpD018ZOMeCpvh9X7CdVb56R6QtMU1bjoOIuNgpy9jSx6Xi1npyOdI26950btsnmTzjAIj81xGNTt8uodc3g50KqqQgWuWjfelyxy6O1zkeF89-XivcJFMPx5jQpwxhBIAbwsBEmfHzwbdk~ux5fr50MS2Fw__" className='swiper-images'/>
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
          <img src="https://s3-alpha-sig.figma.com/img/30e8/1709/a26b864623c3ff0dec63f4545bb226e1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e6PgQXt4QuOlz-mLOLLcaHtvk5I-ZqQi-g3gxeC4wl9k0AzeFFTlafbGg4skzYeKU~bUC5Me97QTBH96BrZDfNpOKTpqyRgQfprt0TNwzsea81yANC-aLGSbGlRMAIzkVHOAbUvg3swcW5gTylEtVDl-smHR1LaAlfKxUPuFV0xNMkVZYK8Rc-QZhbXOuwtm60WHxmi2saFiaVqZjhKFltuUMCU5hAJH0o09dv7uaaiJ1u~eygmpHRfu-5~J7lGBtD8FJpCJ2bFwPZKG0a6ueSvYDONQgv7Fg575~wvw3qCo0eaMp8tV5B700OQjAGMlVx9YQWO4fggRcV-PanO8Fw__" className='swiper-images'/>
          <div className="swiper-overlay">Kehinde Adetona
          <p>Cybersecurity expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/4910/8aa7/6cb63ed6763a13186ad191649d07a055?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fu1n40tj2tHc4DzhgTJQ2VevUdn0ig2LjwJKKuNX-tjgr-pjM1YlG8RR9lgXfldoxiP00tR9KfFTYFM6jnpb4JEogIhSHltsxfqzZFfZTLa-B4xSBQhi5bx~lo45x56veoRqsYoNpK-oJYtpuS6uwJoJMA0OlI~giRIBIo81JX1b3QDMawXTY2jgx8ggB4dE~dgAzquVmDKP8hwm8OZ9Zj1M7M~Nvg3LIXAylSx4Oe-izqMIuDjj3E2Aqiqdt4IIybg9yP7G~2c~-RQx2SFdVoVDl6RcSf7uDdv75ZzCLIkpa-UgxyYRQqEXcT7Mv7NKK~BjAPIxpoFpZsOur41Veg__" className='swiper-images'/>
          <div className="swiper-overlay">Aderonke Obatuyi
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/77f3/681f/dd822877f48463428f46f3631b700cf0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvTkE45UskNAhxTmkKAPju3jncYsvFzlDPeK5~3OtFUMvjfVmw437UNSRouum~Uh3NCNcJfx~PD2Bij0jTBCAFPvnuMHCUqQWmM6A6uo31chPt5bKfaz-44xjDKApI38AkbFMh3cOH0OF4ct5Nv-83e-Ruh2vcNXXuyzL3WqDcIXrUwA8RuB2Cmv~aTpN6Veocc3EFebYLxEZmm2x8gDntNW6wqcSwbvHRVWTsolayXNYEKqBBCSJldVeASDvZqUhRJfK83pYdawdWOynD-O7HfGvrVgRpdgF-cs2Mxw17pU~ShACu6GaBA10K~E0iF0-70DAoRnq7RsjvkVl7vEmg__" className='swiper-images'/>
          <div className="swiper-overlay">Adenike Adeoye
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/0971/302d/6c8e90f01d5148559156fbf5a6112a2f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ken1e7e01cj0EvGiJ-kRrEfJ7mG48IbQHcjV~2D3siXnPCvCp8R40AM-MJaEEt1qGiyiNUzlGd9W9BOf1rGcCsvcdcP2xxeCCzEf6E8RQxu5MyC3zrqhVXpPWnZgoPknA63~~8wYoZx4NTiKV9wNCyS6eSiYehM761P6I7p5B7Lbh4GoljI9dvV7wPPdl7CHUJP8HaFpZW-0Ewu3m1f9ILCubj3XUnrUx3tGwwlyk~W6gq5iQ~Gb9cmbd7ChIFtOMIsdm-n1gPd081qdGdKZh3f1iTSlRhP-F53Iwoq9oDAd-ZtSlDLRr860AbMCwiEHSZB5nF9bJGdEozR8Ui0o6Q__" className='swiper-images'/>
          <div className="swiper-overlay">Adama	Boubacar Oumarou
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/311e/45fe/10b5a55efefcd45ca6e19b9bce2b01d6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NurIQkHm4UqOqCQRNJjwWNuDuOJ-tGp3-hL-oQjUOWokf9NWyazwM1w6QhP3tflnHTvSeCrerrRavmxUwfOff3DnzV8E3gPCEV4Dm4NePMtLYGxi-l-OJoSVXkdy1wB4vgChU5O0Gnc4SGow3Z8uRY0C6wO2B~IFJzdmz9Ae6Kx53RWSv8sXZnDIo-qY7bb5TC9M-kj7By1xBj1aSOYkSPvSt0QAokYoh~jAv10rtD~5aswcRYtF1o2~miB83pyGQqSDye~oNY6ssqQNu~a9suHaMXI~nPisiG6TLpnUuel10sobY8R6Aqksrz1EiB1snqzxi6jKVF4qG~SAK62X8Q__" className='swiper-images'/>
          <div className="swiper-overlay">Zambe Arimoro
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/60ad/dde1/086b424a2d69e3fa109fe5e17a28999a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OdP9eoH9PfVYspFfLwwUmOBgttXeX2a8tlyIbIe8FlQwbgLflZyA3d3NDCcJgXmpjw9JmG4smqPH0M7Nrnwvph9W4D-OWjhXEYjReHZWR196rtlKWSepmeikRzOil06ltOcwgZ0vVX8dVUOWYwCQWir9UO9-uR1jFgBXdPrkYmUl832AhN1T0ok~jxomRs9VkfiyHjt03WqPXpKhRzArWJaYr90d9mjUf1R6ZKWampDPu~bEb3Psa4nQ2sGpmczrSvmxMGcfgnogwBvWNKr3xfr-Vj7H19Qf72syOKubZWn91opXikOBOjSJGuoUHHNhXEsREit524YwfGkZHs4JMQ__" className='swiper-images'/>
          <div className="swiper-overlay">Abigail Ekong
          <p>Data Scientist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-container'>
          <img src="https://s3-alpha-sig.figma.com/img/f32a/bd07/6dec969073687415d69c84081136f4eb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9jzIx5aU4HW01ZY2ySa8kYghKlLtxHmuOE5Z2vdKSqxs-SNteTx2TcuKD7~o2~HPUN9huJtSMnVgZylwyBiomViR8yLzeMBHp2QUSMOo83UDe5zjDpzKymHYcCArA5M4N9r3kC7ngDWHeRHMhCwu5J12d3xGLaPZeHjRk6dGa5QlCbD8BarPfFF-zhUJbT2vUFLFDnJrG8qE2PCl7iAs4YcjoZL4XZMcz-78lWphaPcD7N4s6qG-xclX1Yb3yM0Qp9LpxmNraNm7oYOH2bQQRKgktCXuNL1uOcRYpinMuKfPLrQarqbRJh-uRLEv-AHdIOxBA6UKYvQcgaEVg4F9A__" className='swiper-images'/>
          <div className="swiper-overlay">Dorcas Owolabi
          <p>Mobile app developer</p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className='swiper-container'>
          <img src="/src/assets/Kyenpya.jpg" className='swiper-images'/>
          <div className="swiper-overlay">Kyenpya Gutap
          <p>Frontend  Developer</p>
          </div>
        </SwiperSlide> */}
         
      </Swiper>  
        </div>
        </div>
      </section>
    </>
  );
}
export default MeetTeam;
