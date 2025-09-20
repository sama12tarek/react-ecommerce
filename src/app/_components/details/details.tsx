<<<<<<< HEAD
'use client';
import Image from 'next/image';

// تعريف النوع ProductType بشكل صحيح
export interface ProductType {
  sold?: number;
  images: string[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  ratingsAverage: number;
  updatedAt: string;
  id: string;
  imageCover: string;
  price: number; // إضافة سعر المنتج
  category: {
    name: string; // التأكد من وجود category في ProductType
  };
}

interface DetailsProps {
  data: ProductType; // تأكد من استخدام الاسم الصحيح ProductType
}

export default function Details({ data }: DetailsProps) {
=======
'use client'
import { ProductType } from './../../../types/product.type';
import AddBtn from '@/app/_components/addBtn/addBtn';

export default function Details({data}:{data:ProductType})  {
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
  return (
    <div className="container w-[80%] p-4 mx-auto flex gap-4">
      <div className="w-1/4">
<<<<<<< HEAD
        <div className="p-4">
          <Image
            src={data.imageCover}
            alt={data.title}
            className="w-full"
            width={400}
            height={400}
          />
=======
        <div className="p-4 ">
          <Image src={data.imageCover} alt={data.title} className="w-full" width={200} height={200}/>
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
        </div>
      </div>
      <div className="w-3/4">
        <div className="p-4">
          <h1 className="text-2xl font-bold my-4">{data.title}</h1>
          <p>{data.description}</p>
          <p className="text-emerald-700 mt-2">{data.category.name}</p>

          <div className="flex justify-between items-center w-full px-1 mt-4">
            <p className="font-semibold text-sm text-gray-800">{data.price} EGP</p>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <i className="fas fa-star"></i>
              <span className="text-gray-700">{data.ratingsAverage}</span>
            </div>
          </div>
            <AddBtn id={data.id}/>
    

        
        </div>
      </div>
    </div>
  );
}



