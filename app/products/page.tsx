"use client";

import Navbar from '../Components/navbar';
import { ProductPage } from './components/ProductPage';
import './products.css';

export default function Page() {
  return (
    <>
      <div className="bg-[#131b2e] h-[72px] md:h-[100px] w-full relative">
        <Navbar />
      </div>
      <ProductPage />
    </>
  );
}
