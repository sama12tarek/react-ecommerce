

export default async function selectedsProduct(id) {

const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  const { data } = await res.json();
  
return data
}