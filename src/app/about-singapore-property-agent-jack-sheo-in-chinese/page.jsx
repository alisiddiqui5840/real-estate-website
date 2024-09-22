"use client";
import { useRef } from 'react';
import ChineseImg from '@/components/about-singapore-property-agent-jack-sheo-in-chinese/chineseimg/chineseimg';
import Section1 from '@/components/about-singapore-property-agent-jack-sheo-in-chinese/section1/section1';
import Section2 from '@/components/about-singapore-property-agent-jack-sheo-in-chinese/section2/section2';
import Section3 from '@/components/about-singapore-property-agent-jack-sheo-in-chinese/section3/section3';
import Section4 from '@/components/about-singapore-property-agent-jack-sheo-in-chinese/section4/section4';

export default function AboutSingapore() {
  const sellerRef = useRef(null);
  const buyerRef = useRef(null);
  const landlordRef = useRef(null);
  const tenantRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ChineseImg />
      <div className='text-left max-w-[730px] mx-auto'>
        <ul  className="list-disc list-inside">
        <li
          onClick={() => handleScroll(sellerRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          想要在新加坡买房（或租房）
        </li>
        <li
          onClick={() => handleScroll(buyerRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          想要在新加坡卖房（或出租）
        </li>
        <li
          onClick={() => handleScroll(landlordRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          想要了解新加坡房屋政策（包括降温措施），房屋市场走向等
        </li>
        <li
          onClick={() => handleScroll(tenantRef)}
          className="underline underline-offset-4  cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-[17px]"
        >
          想要物色或有问题咨询新加坡房产中介
        </li>
        </ul>
        <p className="text-[17px] my-[32px]">
          现在让我来一一为你解答。
          </p>
        </div>
    
      <div ref={sellerRef}>
        <Section1/>
      </div>
      <div ref={buyerRef}>
        <Section2/>
      </div>
      <div ref={landlordRef}>
        <Section3/>
      </div>
      <div ref={tenantRef}>
        <Section4/>
      </div>
    </>
  );
}
