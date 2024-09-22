import React from 'react';
import Link from 'next/link';
const Chats = () => {
  return (
    <>
   <div className='bg-[#f7f7f7]'>
        <div className="container max-w-[1180px] mx-auto px-4 py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 font-poppins">
                <div className=" items-center flex  md:col-span-4">
                           <img  src='/Assets/testimonials/contact-Jack.webp' className=' ' alt="property"/>
                </div>
                <div className=" md:col-span-8 flex  flex-col px-[32px]">
                        <h2 className='text-[20px] text-[#ffad27] text-left  font-poppins font-bold pb-[32px]'>WHAT BRINGS YOU HERE TODAY?</h2>
                        <h2 className='text-[17px] text-left  font-poppins  pb-[32px]'>Are you wondering what to do in today’s market?</h2>
                        <h2 className='text-[17px] text-left  font-poppins  pb-[32px]'>In  my  <a href="/blog" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[17px]">blog </a>, I often share stories of the challenges, triumphs, and lessons learned in <a href="/testimonials" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[17px]">my work </a>  as a real estate agent in Singapore.</h2>
                        <h2 className='text-[17px] text-left  font-poppins  pb-[32px]'>Regardless of your situation, you can use me as a sounding board. I’ll provide perspective and clarity from <a href="/transaction" className="underline underline-offset-4 hover:no-underline text-[#123774]  hover:bg-[#123774] hover:text-[#ffffff] transition duration-200 ease-in-out text-[17px]"> my experience </a>. </h2>
                        <Link href="/contact" >
                        <button className="bg-[#123774] hover:bg-black text-white text-[16px]  font-bold h-[52px] w-[181px] focus:outline-none focus:shadow-outline">
                             LET’S CHAT
                        </button>
                        </Link>
                </div>
            </div>
            </div>
    </div>
        </>
    )
    };

export default Chats;