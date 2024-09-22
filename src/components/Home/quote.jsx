import React from 'react';
import Link from 'next/link';

const QuoteHome = () => {
  return (
    <>
    <div className="container max-w-[1170px] mx-auto px-4  py-[24px] pt-[104px]">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[500px]">
        Jack is <span className='text-[#ffad27]'> very knowledgeable </span> about the current market conditions & <span className='text-[#ffad27]'> gives good advice</span>.
            </p>
            <p className="text-[#1a202c] leading-[1.3] font-semibold text-[32px] pb-[40px] max-w-[465px]">
            The presentation material was professionally done, which I’m sure contributed to the speed at which the sale went through.
            </p>
            <p className="text-[#1a202c] leading-[1.3] font-semibold text-[32px]">
            Would certainly be someone I’d call upon for future transactions.
            </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold font-dj text-[38px] text-[#1a202c] mb-[17px]">Neo Soon Hup</h5>
          <p className="text-[#1a202c] text-sm">Chief Operating Officer</p>
          <p className="text-[#1a202c] text-sm">Pan Pacific Hotels Group Limited</p>
        </div>
      </div>

    </div>
    <div className='flex  items-center py-[24px]'>
    <button
          className="bg-[#123774] mx-auto hover:bg-black  text-white text-[16px] font-bold h-[52px] w-[248px]  focus:outline-none focus:shadow-outline"
        >
        <Link className='link' href="/testimonials">CLIENT TESTIMONIALS</Link>
        </button>
        </div>
        </>
  );
};

export default QuoteHome;
