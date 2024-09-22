"use client";
import { useRef, useEffect, useState } from 'react';
import Chats from '@/components/Testimonials/chat';
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
import Reno from '@/components/ultimate-singapore-diy-reno-tips/Reno';
import BackgroundSection from '@/components/ultimate-singapore-diy-reno-tips/background';
import Beginning from '@/components/ultimate-singapore-diy-reno-tips/TheBegining';
import MaterialSection from '@/components/ultimate-singapore-diy-reno-tips/material';
import COMMENCEMENTSection from '@/components/ultimate-singapore-diy-reno-tips/COMMENCEMENT';
import Sequence from '@/components/ultimate-singapore-diy-reno-tips/Sequence';
import Expenses from '@/components/ultimate-singapore-diy-reno-tips/Expenses';
import Contacts from '@/components/ultimate-singapore-diy-reno-tips/Contacts';
import Update from '@/components/ultimate-singapore-diy-reno-tips/Update';

export default function Diy() {
  const sellerRef = useRef(null);
  const buyerRef = useRef(null);
  const landlordRef = useRef(null);
  const tenantRef = useRef(null);
  const ABSD = useRef(null);
  const hug = useRef(null);
  const tuber = useRef(null);
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
            <p className="text-center font-black mb-8 text-xl">Reno Hacks</p>
            <ul className="list-disc list-inside">
              <li
                onClick={() => handleScroll(sellerRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out text-[#1a202c] text-base max-w-[280px]"
              >
                BACKGROUND
              </li>
              <li
                onClick={() => handleScroll(ABSD)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out text-[#1a202c] text-base max-w-[280px]"
              >
                1. THE BEGINNING
              </li>
              <li
                onClick={() => handleScroll(buyerRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
                2. MATERIALS SELECTION
              </li>
              <li
                onClick={() => handleScroll(landlordRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
              3. COMMENCEMENT OF RENO 🔐
              </li>
              <li
                onClick={() => handleScroll(tenantRef)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
               4. RENO SEQUENCE 🗒️
              </li>
              <li
                onClick={() => handleScroll(hug)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
               5. EXPENSES💰
              </li>
              <li
                onClick={() => handleScroll(Singapore)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
           6. FINAL WORDS & CONTACTS ☎️
              </li>
              <li
                onClick={() => handleScroll(tuber)}
                className="hover:underline mb-8 cursor-pointer transition duration-200 ease-in-out  text-[#1a202c] text-base max-w-[280px]"
              >
               2024 UPDATE
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center md:col-span-8">
            <div ref={topRef}></div>
          <Reno/>
          <div ref={sellerRef}>
           <BackgroundSection/>
          </div>
          <ul className="text-left ml-4">
              <li
                onClick={() => handleScroll(ABSD)}
                className="hover:underline underline cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c]  text-base max-w-[280px]"
              >
                1. THE BEGINNING
              </li>
              <li
                onClick={() => handleScroll(buyerRef)}
                className="hover:underline underline cursor-pointer transition duration-200 ease-in-out text-[#123774]   hover:text-[#1a202c]  text-base max-w-[280px]"
              >
                2. MATERIALS SELECTION
              </li>
              <li
                onClick={() => handleScroll(landlordRef)}
                className="hover:underline underline cursor-pointer transition duration-200 ease-in-out text-[#123774]   hover:text-[#1a202c]  text-base max-w-[280px]"
              >
              3. COMMENCEMENT OF RENO 🔐
              </li>
              <li
                onClick={() => handleScroll(tenantRef)}
                className="hover:underline underline cursor-pointer transition duration-200 ease-in-out text-[#123774]   hover:text-[#1a202c]  text-base max-w-[280px]"
              >
               4. RENO SEQUENCE 🗒️
              </li>
              <li
                onClick={() => handleScroll(hug)}
                className="hover:underline underline cursor-pointer transition duration-200 ease-in-out text-[#123774]   hover:text-[#1a202c]  text-base max-w-[280px]"
              >
               5. EXPENSES💰
              </li>
              <li
                onClick={() => handleScroll(Singapore)}
                className="underline cursor-pointer transition duration-200 ease-in-out text-[#123774]  hover:text-[#1a202c] text-base max-w-[280px]"
              >
           6. FINAL WORDS & CONTACTS ☎️
              </li>
            </ul>
          <div ref={ABSD}>
            <Beginning/>
          </div>
          <div ref={buyerRef}>
            <MaterialSection/>
          </div>
          <div ref={landlordRef}>
            <COMMENCEMENTSection/>
          </div>
          <div ref={tenantRef}>
            <Sequence/>
          </div>
          <div ref={hug}>
            <Expenses/>
          </div>
          <div ref={Singapore}>
            <Contacts/>
          </div>
          <div ref={tuber}>
            <Update/>
          </div>
          <Chats />
          <div ref={bottomRef} className=' translate-y-[900px]'></div>
        </div>
      </div>
    </>
  );
}
