
import getProduct from '@/lib/api/products.api';
import SingleProduct from '@/app/singleProduct/singleProduct';

export interface ProductType {
  sold?: number
  images: string[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  ratingsAverage: number
  updatedAt: string
  id: string
  
}



export default async function AllProducts () {
  const data=await getProduct()
  return (
    <>
        <div className='container my-12 w-[80%] mx-auto'>
            <div className='flex flex-wrap gap-4 p-4 justify-evenly'>
              {data.map((product:productType) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
    </>
  );
}


