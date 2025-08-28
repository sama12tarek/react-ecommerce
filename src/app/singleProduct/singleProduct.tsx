import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SingleProduct({ product }) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
      <Link href={`/products/${product.id}`}>
        <Card className='gap-2 p-2'>
          <CardHeader>
            <CardTitle className="text-sm line-clamp-1">{product.brand.name}</CardTitle>
            <CardDescription>{product.category.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            <p>{product.title}</p>
          </CardContent>
          <CardFooter>
            <div className='flex justify-between items-center w-full px-1'>
              <p className='font-semibold text-sm text-gray-800'>
                {product.price} EGP
              </p>
              <div className='flex items-center gap-1 text-yellow-500 text-sm'>
                <i className='fas fa-star'></i>
                <span className='text-gray-700'>{product.ratingsAverage}</span>
              </div>
            </div>
          </CardFooter>
          <Button variant="outline" className='cursor-pointer'>Add to Cart</Button>
        </Card>
      </Link>
    </div>
  );
}

