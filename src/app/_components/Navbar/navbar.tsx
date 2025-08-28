import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="bg-red-300 p-4">
      <div className="container w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="left">
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center items-center">
            <li className="flex items-center gap-2 font-bold text-2xl">
              <span>Freshcard</span>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/card">Card</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/brands">Brands</Link></li>
          </ul>
        </div>

    
        <div className="right mt-4 lg:mt-0">
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
            <li><i className="fab fa-facebook text-blue-600"></i></li>
            <li><i className="fab fa-instagram text-pink-500"></i></li>
            <li><i className="fab fa-twitter text-blue-400"></i></li>
            <li><i className="fab fa-tiktok text-black"></i></li>
            <li><i className="fab fa-linkedin text-blue-700"></i></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/login">Sign Out</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;




