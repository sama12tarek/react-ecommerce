'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function CategorySwiper({ data }) {
  return (
    <div className="mx-auto w-[80%]">
      <h1 className='text-2xl font-bold text-pink-500 my-4'> category slider</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={7}
  
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {data.map((category) => (
          <SwiperSlide key={category._id}>
          
                <img
                  src={category.image}
                  alt={category.name}
                
                  className="object-cover w-full h-[150px]"
                />
            
              <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



