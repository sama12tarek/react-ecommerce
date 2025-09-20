
import getProduct from '@/lib/api/products.api';
import SingleProduct from '@/app/singleProduct/singleProduct';
<<<<<<< HEAD

export interface productType {
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
=======
import { ProductType } from 'src/types/product.type';
export default async function AllProducts () {
  const data=await getProduct()

>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
  return (
    <>
        <div className='container my-12 w-[80%] mx-auto'>
            <div className='flex flex-wrap gap-4 p-4 justify-evenly'>
<<<<<<< HEAD
              {data.map((product:productType) => (
=======
              {data.map((product:ProductType) => (
>>>>>>> 8a730db (fix: correctly typed params and removed invalid await)
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
    </>
  );
}


