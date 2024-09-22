import React from 'react';
import Link from "next/link";
const Contact = () => {
  return (
    <div className="container max-w-[1280px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div className="text-center md:col-span-5">
          
        </div>
        <div className='md:col-span-7'>
        <img
            src='/Assets/about/award.webp'
            alt="Jack Sheo"
            
          />
          <p className="text-[16px] text-center font-poppins mt-2 pb-[48px]">Receiving my most recent top producer award with my family.</p>
          <p className="text-[17px]  font-poppins mt-2 mb-[32px]">My commitment to you is simple:</p>
          <p className="text-[17px]  font-poppins mt-2 mb-[32px]">As your property agent, I will listen attentively, work tirelessly, and use <a href="/blog" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">my knowledge </a>of Singapore’s property market to assist you. My goal is to make your house hunting, investing, and selling process as smooth and stress-free as possible, no matter your level of experience.</p>
          <p className="text-[17px]  font-poppins mt-2 mb-[32px]">Looking forward to connecting with you soon to hear your story & discuss how I can best support you!</p>
          <Link href='/contact'>
          <button
              className="bg-[#123774] ml-auto hover:bg-black  text-white text-[16px] font-black h-[52px] w-[181px]  focus:outline-none focus:shadow-outline"
            >
             CONTACT JACK
            </button>
            </Link>
        </div>
        </div>
        </div>
    )
    };

export default Contact;