import selectedsProduct from '@/lib/api/selectedProduct';
import React from 'react';
import Details from '@/app/_components/details/details';


type Params = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: Params) {
  const { id } = params;

  const data = await selectedsProduct(id);

  return (
    <>
      <Details data={data} />
    </>
  );
}
