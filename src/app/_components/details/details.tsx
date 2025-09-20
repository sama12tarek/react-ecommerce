'use client'
import { ProductType } from './../../../types/product.type';
import AddBtn from '@/app/_components/addBtn/addBtn';

export default function Details({data}:{data:ProductType})  {
  return (
      <div className="container w-[80%] p-4 mx-auto flex gap-4">
    
      <div className="w-1/4">
        <div className="p-4 ">
          <Image src={data.imageCover} alt={data.title} className="w-full" width={200} height={200}/>
        </div>
      </div>
      <div className="w-3/4">
        <div className="p-4">
          <h1 className="text-2xl font-bold my-4">{data.title}</h1>
          <p>{data.description}</p>
          <p className="text-emerald-700 mt-2">{data.category.name}</p>

          <div className="flex justify-between items-center w-full px-1 mt-4">
            <p className="font-semibold text-sm text-gray-800">
              {data.price} EGP
            </p>

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


