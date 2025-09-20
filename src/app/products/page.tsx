
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
import getProduct from '../../lib/api/products.api';
import SingleProduct from '../singleProduct/singleProduct';
import { ProductType } from '@/types/product.type';

export default async function Products() {
  const data = await getProduct();

  return (
    <>
  
    <div className='container my-12 w-[80%] mx-auto'>

      <div className='flex flex-wrap gap-4 p-4 justify-evenly'>
        {data.map((product:ProductType) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
}




