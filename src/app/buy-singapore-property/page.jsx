"use client";
import { useRef } from 'react';
import Chats from '@/components/Testimonials/chat';
import BuyProperty from '@/components/buy-singapore-property/buy-singapore-property';
import QuoteProperty from '@/components/buy-singapore-property/propertyquote';
import Myths from '@/components/buy-singapore-property/myths';

export default function BuySingaporeProperty() {

    const myths = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <BuyProperty/>
      <p className="text-[17px] mb-[32px] max-w-[730px] mx-auto">
      However, I’ve retained the infographics highlighting the <span onClick={() => handleScroll(myths)}
          className="underline underline-offset-4 hover:no-underline cursor-pointer transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">nine biggest myths</span> about Singapore properties. These relevant infographics can help you better understand the Singapore real estate market and make informed decisions when buying or investing in properties.
          </p>
            <QuoteProperty/>
          <div ref={myths}>
        <Myths/>
      </div>
      <Chats/>
    </>
  );
}
