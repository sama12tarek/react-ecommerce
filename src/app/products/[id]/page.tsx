import selectedsProduct from '@/lib/api/selectedProduct';
import React from 'react';
import Details from '@/app/_components/details/details';
type Params = {
  params: {
    id: string;
  };
};
export default async function ProductDetails({ params }) {
  const { id } = await params;

  const data= await selectedsProduct(id)

  return (
  <>
<Details data={data}/>
  </>
  );
}
