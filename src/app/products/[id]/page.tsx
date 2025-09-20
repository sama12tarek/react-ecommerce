import selectedsProduct from '@/lib/api/selectedProduct';
import React from 'react';
import Details from '@/app/_components/details/details';
import relatedProducts from '@/productCategoryAction/relatedProducts';
import SingleProduct from '@/app/singleProduct/singleProduct';
import { ProductType } from '@/types/product.type';

export default async function ProductDetails({ params }:{params:Promise<{id:string}>}) {
  const { id } = await params;

  const data= await selectedsProduct(id);
if(!data){
  return<h1>thier isnt data</h1>
}
const dataCategory=await relatedProducts(data.category._id)
  return (
  <>
<Details data={data}/>
  <div className='flex flex-wrap gap-4 p-4 justify-evenly'>
        {dataCategory.data.map((product:ProductType) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
  </>
  );
}
