'use server'

import getMyToken from '@/utilities/getMyToken';

export default async function getLoggedUser() {
  const result = await getMyToken();

  // لو مفيش توكن
  if (!result || result.status !== 'success' || !result.token) {
    throw new Error('There isn’t a valid token');
  }

  const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
    method: 'GET',
    headers: {
      token: result.token,            // ← هنا بنبعث النص بس
      'Content-Type': 'application/json',
    },
  });

  const payload = await res.json();
  return payload;
}









