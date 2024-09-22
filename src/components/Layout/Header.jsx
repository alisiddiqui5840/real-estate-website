"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHover = (setOpenFunction, value) => {
    if (window.innerWidth >= 1024) {
      setOpenFunction(value);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center max-w-[1200px] mx-auto justify-between p-4 bg-[#FFFFFF] font-brandon font-medium">
      <div className="flex items-center">
        <Link href="/"><img src='/Assets/header/jack-logo.png' alt="Logo" className="h-[83px] w-[200px] mr-4" /></Link>
      </div>
      <div className="flex lg:hidden">
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div className={`lg:flex flex-col lg:flex-row lg:bg-white bg-black lg:items-center lg:space-x-8 fixed inset-0 lg:static lg:w-auto lg:h-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-[90%] h-full ml-auto z-10  text-[14px] px-3' : 'hidden lg:block'}`}>
        <div className="flex justify-end p-4 lg:hidden">
          <button
            className="text-white hover:text-gray-400 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className='px-[14px] py-[7px] lg:px-0 lg:py-0 border-b border-b-custom-white lg:border-none'>
          <Link href="/" onClick={handleLinkClick} className="lg:text-[#1a202c] text-white hover:text-[#123774] active:text-[#123774] text-[18px]">Home</Link>
        </div>
        <div className='px-[14px] py-[7px] lg:px-0 lg:py-0 border-b border-b-custom-white lg:border-none'>
          <Link href="/event" onClick={handleLinkClick} className="lg:text-[#1a202c] text-white hover:text-[#123774] border-b-white lg:border-none  active:text-[#123774] text-[18px]">Events</Link>
        </div>
        <div
          className="relative lg:block"
          onMouseEnter={() => handleHover(setIsServicesOpen, true)}
          onMouseLeave={() => handleHover(setIsServicesOpen, false)}
        >
          <div className='border-b border-b-custom-white lg:border-none'>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="lg:text-[#1a202c]  text-white hover:text-[#123774] px-[14px] py-[7px] lg:px-0 lg:py-0 active:text-[#123774] flex items-center text-[18px]"
            >
              Services
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </button>
          </div>
          {isServicesOpen && (
            <div className="lg:absolute  lg:top-full lg:left-0 lg:w-[200px] ml-2 lg:ml-0 w-full bg-black lg:bg-white shadow-lg rounded-md py-2">
              <Link href="/buy-singapore-property" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Buy Singapore Property [2024]</Link>
              <Link href="/find-a-tenant-in-singapore" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Find a Tenant in Singapore [2024]</Link>
              <Link href="/sell-singapore-property" onClick={handleLinkClick} className="block px-4 py-2 border-b border-b-custom-white lg:border-none  lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Sell Singapore Property [2024]</Link>
            </div>
          )}
        </div>
        <div
          className="relative lg:block"
          onMouseEnter={() => handleHover(setIsResourcesOpen, true)}
          onMouseLeave={() => handleHover(setIsResourcesOpen, false)}
        >
          <div className='border-b border-b-custom-white lg:border-none'>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="lg:text-[#1a202c] text-white  hover:text-[#123774] px-[14px] py-[7px] lg:px-0 lg:py-0 active:text-[#123774] flex items-center text-[18px]"
            >
              Resources
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </button>
          </div>
          {isResourcesOpen && (
            <div className="lg:absolute lg:top-full lg:left-0 lg:w-[200px] ml-2 lg:ml-0 w-full bg-black lg:bg-white shadow-lg rounded-md py-2">
              <Link href="singapore-property-cooling-measures" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Singapore Property Cooling Measures</Link>
              <Link href="singapore-home-staging-insider-tips" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Singapore Home Staging Insider Tips</Link>
              <Link href="ultimate-singapore-diy-reno-tips" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none  px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Ultimate Singapore DIY Reno Tips</Link>
            </div>
          )}
        </div>
        <div className='border-b border-b-custom-white lg:border-none px-[14px] py-[7px]  lg:px-0 lg:py-0'>
          <Link href="/blog" onClick={handleLinkClick} className="lg:text-[#1a202c]  text-white hover:text-[#123774] active:text-[#123774] text-[18px]">Blog</Link>
        </div>
        <div
          className="relative lg:block"
          onMouseEnter={() => handleHover(setIsAboutOpen, true)}
          onMouseLeave={() => handleHover(setIsAboutOpen, false)}
        >
          <div className='border-b border-b-custom-white lg:border-none px-[14px] py-[7px] lg:px-0 lg:py-0'>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="lg:text-[#1a202c] text-white hover:text-[#123774] active:text-[#123774] flex items-center text-[18px]"
            >
              About
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </button>
          </div>
          {isAboutOpen && (
            <div className="lg:absolute lg:top-full lg:left-0 ml-2 lg:ml-0  lg:w-[200px] w-full bg-black z-10 lg:bg-white shadow-lg rounded-md py-2">
              <Link href="/about" onClick={handleLinkClick} className="block px-4 py-2 border-b border-b-custom-white lg:border-none lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">About Jack Sheo</Link>
              <Link href="/testimonials" onClick={handleLinkClick} className="block px-4  border-b border-b-custom-white lg:border-none py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Testimonials</Link>
              <Link href="/transaction" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Jack Sheo Transactions</Link>
              <Link href="/real-estate-career-in-singapore" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">Real Estate Career in Singapore</Link>
              <Link href="/about-singapore-property-agent-jack-sheo-in-chinese" onClick={handleLinkClick} className="block border-b border-b-custom-white lg:border-none  px-4 py-2 lg:text-[#1a202c] text-white lg:hover:bg-[#123774] hover:text-[#ffffff] text-[16px]">关于新加坡房产中介，Jack Sheo</Link>
            </div>
          )}
        </div>
        <div className='border-b border-b-custom-white lg:border-none p x-[14px] py-[7px] lg:px-0 lg:py-0 '>
          <Link href="/contact" onClick={handleLinkClick} className="lg:text-[#1a202c] text-white hover:text-[#123774] active:text-[#123774] text-[18px]">Contact</Link>
        </div>
        <svg aria-hidden="true" className='text-[#4a5568] hover:text-[#123774] cursor-pointer lg:block hidden' fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 26 28"><title>Search</title><path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path></svg>
      </div>
    </nav>
  );
};

export default Header;
