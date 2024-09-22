"use client";
import { useRef } from 'react';
import Client from '@/components/Testimonials/client';
import Seller from '@/components/Testimonials/sellers';
import Buyers from '@/components/Testimonials/buyer';
import Landlords from '@/components/Testimonials/landlords';
import Tenants from '@/components/Testimonials/tenant';
import Chats from '@/components/Testimonials/chat';

export default function Testimonials() {
  const sellerRef = useRef(null);
  const buyerRef = useRef(null);
  const landlordRef = useRef(null);
  const tenantRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Client />
      <div className="container max-w-[1100px] mx-auto px-4 py-16 flex lg;justify-between flex-col lg:flex-row">
        <h2
          onClick={() => handleScroll(sellerRef)}
          className="underline underline-offset-4 hover:no-underline cursor-pointer transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[32px]"
        >
          SELLERS
        </h2>
        <h2
          onClick={() => handleScroll(buyerRef)}
          className="underline underline-offset-4 hover:no-underline cursor-pointer transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[32px]"
        >
          BUYERS
        </h2>
        <h2
          onClick={() => handleScroll(landlordRef)}
          className="underline underline-offset-4 hover:no-underline cursor-pointer transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[32px]"
        >
          LANDLORDS
        </h2>
        <h2
          onClick={() => handleScroll(tenantRef)}
          className="underline underline-offset-4 hover:no-underline cursor-pointer transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[32px]"
        >
          TENANTS
        </h2>
      </div>
      <div ref={sellerRef}>
        <Seller />
      </div>
      <div ref={buyerRef}>
         <Buyers/>
      </div>
      <div ref={landlordRef}>
      <Landlords/>
      </div>
      <div ref={tenantRef}>
        <Tenants/>
      </div>
      <Chats/>
    </>
  );
}
