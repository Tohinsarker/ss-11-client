import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px]"
      >
        <SwiperSlide><Slide image={image1} text='Start your digital marketing campaigns up n runnning'></Slide></SwiperSlide>
        <SwiperSlide><Slide image={image2} text='Start your digital marketing campaigns up n runnning'></Slide></SwiperSlide>
        <SwiperSlide><Slide image={image3} text='Start your digital marketing campaigns up n runnning'></Slide></SwiperSlide>
      
      
      </Swiper>
    </div>
  );
}
