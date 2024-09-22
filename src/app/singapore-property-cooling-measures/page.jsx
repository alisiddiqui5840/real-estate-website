"use client";
import { useRef } from 'react';
import CoolingImg from '@/components/Cooling-measure/CoolingImgSection';
import BSD from '@/components/Cooling-measure/BSD';
import ABSDSection from '@/components/Cooling-measure/ABSD';
import SSDSection from '@/components/Cooling-measure/SSD';
import TDSRSection from '@/components/Cooling-measure/TDSR';
import MSRSection from '@/components/Cooling-measure/MSR';
import LTVSection from '@/components/Cooling-measure/LTV';
import Chats from '@/components/Testimonials/chat';

export default function CoolinSystem() {
  const sellerRef = useRef(null);
  const buyerRef = useRef(null);
  const landlordRef = useRef(null);
  const tenantRef = useRef(null);
  const ABSD = useRef(null);
  const LTV = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CoolingImg/>
      <div className='text-left max-w-[600px] mx-auto'>
        <ul  className="list-disc list-inside">
        <li
          onClick={() => handleScroll(sellerRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          Buyer Stamp Duty (BSD)
        </li>
        <li
          onClick={() => handleScroll(ABSD)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
            Additional Buyer Stamp Duty (ABSD)
        </li>
        <li
          onClick={() => handleScroll(buyerRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          Seller Stamp Duty (SSD)
        </li>
        <li
          onClick={() => handleScroll(landlordRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
         Total Debt Servicing Ratio (TDSR)
        </li>
        <li
          onClick={() => handleScroll(tenantRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          Mortgage Servicing Ratio (MSR) – HDB ONLY
        </li>
        <li
          onClick={() => handleScroll(LTV)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          Loan Tenure & Loan-to-Value Limits (LTV)
        </li>
        </ul>
      
        </div>
        <div className='flex  items-center  max-w-[650px] p-[16px] mt-[16px] rounded-xl mx-auto'>
              <img src="/Assets/find-tenant/red.svg" className='w-[25px] h-[25px] text-[#ff0000] ' alt="" />
              <p className="text-[17px]  ml-4  ">Rules can suddenly change. Please refer to the government websites for confirmation.</p>
              </div>
              <div className='border-b-2 pb-8 max-w-[550px] mx-auto'></div>
      <div ref={sellerRef}>
        <BSD/>
      </div>
      <div ref={ABSD}>
        <ABSDSection/>
      </div>
      <div ref={buyerRef}>
       <SSDSection/>
      </div>
      <div ref={landlordRef}>
      <TDSRSection/>
      </div>
      <div ref={tenantRef}>
        <MSRSection/>
      </div>
      <div ref={LTV}>
    <LTVSection/>
      </div>
      <Chats/>
    </>
  );
}
