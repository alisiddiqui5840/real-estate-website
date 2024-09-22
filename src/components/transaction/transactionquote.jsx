import React from 'react';

const TransactionQuote = () => {
  return (
    <div className="container max-w-[1170px] mx-auto px-4 py-16">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c]  font-semibold text-[32px] pb-[40px] leading-none">
        Jack was organised, clear, meticulous, prompt, and <span className='text-[#ffad27]'> so easy to work with</span>.
            </p>
            <p className="text-[#1a202c] font-semibold text-[32px] pb-[40px] leading-none">
            Besides his work ethic & professionalism, we were heartened that Jack took the time to <span className='text-[#ffad27]'>understand our concerns </span>, and then made sure they were met.
            </p>
            <p className="text-[#1a202c] font-semibold text-[32px] leading-none">
            We managed to close the listing within a week!
            </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold font-dj text-[38px] text-[#1a202c] mb-[17px]">Denise Ng</h5>
          <p className="text-[#1a202c] text-sm">Retail Performance Manager</p>
          <p className="text-[#1a202c] text-sm">Tiffany & Co</p>
        </div>
      </div>

    </div>
  );
};

export default TransactionQuote;
