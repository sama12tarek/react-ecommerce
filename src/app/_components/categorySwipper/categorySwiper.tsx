'use client';

<<<<<<< HEAD
=======

>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
<<<<<<< HEAD

export type CategoryType = {
  _id: string;
  name: string;
  image: string;
  // أي خصائص إضافية قد تكون لديك
};
// هنا حددنا النوع بدقة أكثر
interface CategorySwiperProps {
  data: CategoryType[];
}

export default function CategorySwiper({ data }: CategorySwiperProps) {
=======
import { CategoryType } from './../../../types/category.type';

export default function CategorySwiper({ data }:{data:CategoryType[]}) {
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
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
<<<<<<< HEAD
        {data.map((category: CategoryType) => (
          <SwiperSlide key={category._id}>
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              className="object-cover w-full h-[150px]"
            />
            <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
=======
        {data.map((category:CategoryType) => (
          <SwiperSlide key={category._id}>
          
                <Image
                  src={category.image}
                  alt={category.name}
                width={200}
                height={200}
                  className="object-cover w-full h-[150px]"
                />
            
              <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
          
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
