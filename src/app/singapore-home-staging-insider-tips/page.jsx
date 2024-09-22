"use client";
import { useRef, useEffect, useState } from 'react';
import Chats from '@/components/Testimonials/chat';
import HomeStage from '@/components/singapore-home-staging-insider-tips/HomeStaging';
import Power from '@/components/singapore-home-staging-insider-tips/power';
import The7 from '@/components/singapore-home-staging-insider-tips/TheSeven';
import Arete from '@/components/singapore-home-staging-insider-tips/arete';
import Expats from '@/components/singapore-home-staging-insider-tips/expats';
import Exco from '@/components/singapore-home-staging-insider-tips/esco';
import Huggy from '@/components/singapore-home-staging-insider-tips/huggy';
import Kelvin from '@/components/singapore-home-staging-insider-tips/singapore';
import Tubear from '@/components/singapore-home-staging-insider-tips/tubear';
import WTP from '@/components/singapore-home-staging-insider-tips/WTP';
import KeySection from '@/components/singapore-home-staging-insider-tips/Key';

export default function HomeStaging() {
  const sellerRef = useRef(null);
  const buyerRef = useRef(null);
  const landlordRef = useRef(null);
  const tenantRef = useRef(null);
  const ABSD = useRef(null);
  const hug = useRef(null);
  const tuber = useRef(null);
  const Wtp = useRef(null);
  const Key = useRef(null);
  const Singapore = useRef(null);
  const sidebarRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [bottomReached, setBottomReached] = useState(false);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
      const top = topRef.current.getBoundingClientRect().top;
      const bottom = bottomRef.current.getBoundingClientRect().bottom;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (top < 0 && bottom > windowHeight) {
        setIsSticky(true);
        setBottomReached(false);
      } else if (bottom <= windowHeight) {
        setIsSticky(false);
        setBottomReached(true);
      } else {
        setIsSticky(false);
        setBottomReached(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins max-w-[1200px] mx-auto">
        <div className="text-left md:col-span-4 max-w-[340px]">
          <div
            ref={sidebarRef}
            className={`mx-auto p-6 rounded-xl bg-[#f7f7f7] transition-all duration-200 ${
              isSticky ? 'sticky top-0' : 'relative'
            }`}
            style={{
              top: isSticky ? '20px' : 'auto',
              bottom: bottomReached ? '0px' : 'auto',
            }}
          >
            <p className="text-center font-black mb-8 text-xl">Home Staging Insider Tips</p>
            <ul className="list-disc list-inside">
              <li
                onClick={() => handleScroll(sellerRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out text-[#1a202c] text-base max-w-[280px]"
              >
                THE POWER OF FIRST IMPRESSIONS IN REAL ESTATE
              </li>
              <li
                onClick={() => handleScroll(ABSD)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out text-[#1a202c] text-base max-w-[280px]"
              >
                THE 7 LOCAL HOME STAGING EXPERTS
              </li>
              <li
                onClick={() => handleScroll(buyerRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                ARETE CULTURE
              </li>
              <li
                onClick={() => handleScroll(landlordRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                EXPATS FURNITURE RENTAL PTE LTD
              </li>
              <li
                onClick={() => handleScroll(tenantRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                ESCO LEASING
              </li>
              <li
                onClick={() => handleScroll(hug)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                HUGGYHOMEY
              </li>
              <li
                onClick={() => handleScroll(Singapore)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
            SINGAPORE FURNITURE RENTAL
              </li>
              <li
                onClick={() => handleScroll(tuber)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                TUBEAR
              </li>
              <li
                onClick={() => handleScroll(Wtp)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out ml-5 text-[#1a202c] text-base max-w-[280px]"
              >
                WTP FURNITURE
              </li>
              <li
                onClick={() => handleScroll(Key)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out text-[#1a202c] text-base max-w-[280px]"
              >
                KEY TAKEAWAYS
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center md:col-span-8">
            <div ref={topRef}></div>
          <HomeStage/>
          <div ref={sellerRef}>
           <Power/>
          </div>
          <div ref={ABSD}>
            <The7/>
          </div>
          <div ref={buyerRef}>
            <Arete/>
          </div>
          <div ref={landlordRef}>
            <Expats/>
          </div>
          <div ref={tenantRef}>
            <Exco/>
          </div>
          <div ref={hug}>
            <Huggy/>
          </div>
          <div ref={Singapore}>
            <Kelvin/>
          </div>
          <div ref={tuber}>
            <Tubear/>
          </div>
          <div ref={Wtp}>
            <WTP/>
          </div>
          <div ref={Key}>
            <KeySection/>
          </div>
          
          <Chats />
          <div ref={bottomRef} className=' translate-y-[900px]'></div>
        </div>
      </div>
    </>
  );
}
