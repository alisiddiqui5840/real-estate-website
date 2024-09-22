import React from 'react';
import Link from 'next/link';

const Learn = () => {
  return (
    <>
   
        <div className="container max-w-[1250px] mx-auto px-4 py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 font-poppins">
                
                <div className=" md:col-span-7 flex justify-center items-start flex-col pr-[32px]">
                    <div className='flex flex-col items-start'>
                        <h2 className=' text-[#123774]  text-[48px] font-black font-brandon mb-[10px] '>LEARN</h2>
                        <h2 className='text-[20px] font-poppins text-left pb-[56px] max-w-[600px]'>“An investment in knowledge pays the best interest.” – Benjamin Franklyn</h2>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="flex flex-col items-start border-r border-[#d3d3d3] mr-8 ">
                            <h2 className='text-[20px] font-bold font-poppins pb-[10px]  '>EVENTS</h2>
                            <h2 className='text-[20px] text-left font-poppins pb-[32px] pr-16'>Hear from the experts.</h2>
                            <button className="bg-[#123774] hover:bg-black text-white text-[16px]  font-bold h-[52px] w-[181px] focus:outline-none focus:shadow-outline">
                            <Link className='link' href="/events">DISCOVER</Link>
                            </button>
                        </div>
                      
                        <div className="flex flex-col items-start  ">
                            <h2 className='text-[20px] text-left font-bold font-poppins pb-[10px] '>PROPERTY COOLING MEASURES</h2>
                            <h2 className='text-[20px] text-left font-poppins pb-[32px]'>Are you in the know?</h2>
                            <button className="bg-[#123774] hover:bg-black text-white text-[16px]  font-bold h-[52px] w-[181px] focus:outline-none focus:shadow-outline">
                            <Link className='link' href="/singapore-property-cooling-measures">THE MEASURES</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center md:col-span-5">
                           <img className='h-full'  src='/Assets/home/learn.webp ' alt="property"/>
                </div>
          </div>
          </div>
        </>
    )
    };

export default Learn;