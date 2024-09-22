import Link from 'next/link';
import React from 'react';

const Welcome = () => {
  return (
    <>
    <h1 className="text-[48px] pb-4 font-black text-center font-brandon">SINGAPORE PROPERTY AGENT, JACK SHEO</h1>
    <div className='bg-[#f7f7f7]'>
    <div className="container max-w-[1300px] mx-auto px-[24px] py-[104px]">
          
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        
        <div className='md:col-span-7'>
          <h3 className=' text-[#123774] max-w-[540px] text-[48px] font-black font-brandon mb-[10px] '>WARM WELCOME!</h3>
          <p className="text-[20px] max-w-[530px]    font-poppins  mb-[32px] leading-snug ">I’m Jack, a seasoned property agent in Singapore with over a decade of experience in the industry.</p>
          <p className="text-[20px] max-w-[620px] font-poppins  mb-[32px] leading-snug">What brings you here today? Are you seeking answers or insights?</p>
          <p className="text-[20px] max-w-[620px] font-poppins  mb-[32px] leading-snug">Whether you’re here to look see or to delve into specific real estate matters, your presence is sincerely valued.</p>
          <p className="text-[20px] max-w-[620px] font-poppins  mb-[32px] leading-snug">Within these pages, you’ll discover real estate resources & <a href="/blog" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[20px]"> captivating stories</a> (I hope!) drawn from my  <a href="/transaction" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[20px]">encounters </a> over the years.</p>
          <p className="text-[20px] max-w-[620px] font-poppins  mb-[32px] leading-snug">Don’t hesitate to  <a href="/contact" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[20px]"> reach out</a> if you can’t find what you need or if you simply want a second opinion.</p>
          <p className="text-[20px] max-w-[620px] font-poppins  mb-[32px] leading-snug">May your day be filled with fruitful discoveries & moments of wonder!</p>
          <p className="text-[20px] max-w-[620px] font-poppins  leading-snug ">Looking forward to connecting with you soon!</p>
          
        </div>
        <div className="text-center md:col-span-5">
        <img
            className='box-shadow'
            src='/Assets/home/Jack-Sheo-Singapore.webp'
            alt="Jack Sheo"
          />
        </div>
      
        </div>
        </div>
        <div className='flex  items-center pb-[24px]'>
          <button
            className="bg-[#123774] mx-auto hover:bg-black  text-white text-[16px] font-bold h-[52px] w-[181px]  focus:outline-none focus:shadow-outline"
          >
            <Link className='link' href="/about">ABOUT JACK</Link>
          </button>
        </div>
        </div>
        </>
    )
    };

export default Welcome;