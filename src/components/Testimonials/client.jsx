
import React from 'react';
import Link from 'next/link';

const Client = () => {
  return (
    <div className="container max-w-[1170px] mx-auto px-4 py-16">
        <img 
            src='/Assets/testimonials/thank-you.webp'
            alt="thankyou"
            
          />
          <h1 className="text-[48px] py-[104px] font-black text-center font-brandon">CLIENT TESTIMONIALS</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div className="text-center md:col-span-6">
        <img
             className='h-[523px] w-[500px]'
            src='/Assets/testimonials/jack-pic.webp'
            alt="Jack Sheo"
            
          />
        </div>
        <div className='md:col-span-6'>
         <h3 className='text-[20px] text-[#123774] font-black font-brandon mb-[10px] leading-none'>TO MY AMAZING CLIENTS:</h3>
          <p className="text-[17px]  font-poppins  mb-[32px] leading-5">Your trust & support mean the world to me. When I first became a property agent, I aimed to be <a href="#" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[17px]">the kind of agent</a> I always wished I had met. Someone patient who goes above and beyond to make the process smooth and stress-free.</p>
          <p className="text-[17px]  font-poppins  mb-[32px] leading-5">Your testimonials show me that I’ve made that dream a reality, and I’m genuinely grateful for that.</p>
          <h3 className='text-[20px] text-[#123774] font-black font-brandon leading-none  mb-[10px]'>TO MY PROSPECTIVE CLIENT:</h3>
          <p className="text-[17px]  font-poppins  mb-[32px] leading-5">I want you to know that the same level of commitment awaits you. If I can do the same for you, I would love to make that happen.</p>
          <p className="text-[17px]  font-poppins  mb-[32px] leading-5">Whether you’re buying, selling, renting, or investing, I’m here to guide you.</p>
          <p className="text-[17px]  font-poppins  mb-[32px] leading-5">Thank you for considering me as your trusted property agent. I look forward to hearing your story and journey with you.</p>
          
          <button
              className="bg-[#123774] ml-auto hover:bg-black  text-white text-[16px] font-black h-[52px] w-[181px]  focus:outline-none focus:shadow-outline"
            >
             <Link href="/contact">CONTACT JACK</Link>
            </button>
        </div>
        </div>
        </div>
    )
    };

export default Client;