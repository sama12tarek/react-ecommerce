
import getProduct from '../../lib/api/products.api';
import SingleProduct from '../singleProduct/singleProduct';

export default async function Products() {
  const data = await getProduct();

  return (
    <>
  
    <div className='container my-12 w-[80%] mx-auto'>
      <div className='flex flex-wrap gap-4 p-4 justify-evenly'>
        {data.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
}




